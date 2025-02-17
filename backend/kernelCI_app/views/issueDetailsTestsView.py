from http import HTTPStatus
from typing import Dict, Optional
from kernelCI_app.helpers.errorHandling import create_api_error_response
from kernelCI_app.models import Incidents
from kernelCI_app.helpers.issueDetails import fetch_latest_issue_version
from kernelCI_app.typeModels.issueDetails import (
    IssueDetailsPathParameters,
    IssueDetailsRequest,
    IssueTestsResponse,
)
from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView
from pydantic import ValidationError


class IssueDetailsTests(APIView):
    def _fetch_incidents(self, *, issue_id: str, version: int) -> Optional[Dict]:
        fields = [
            "test__id",
            "test__duration",
            "test__status",
            "test__path",
            "test__start_time",
            "test__environment_compatible",
        ]

        tests = Incidents.objects.filter(
            issue_id=issue_id, issue_version=version
        ).values(*fields)

        return [
            {
                "id": test["test__id"],
                "duration": test["test__duration"],
                "status": test["test__status"],
                "path": test["test__path"],
                "start_time": test["test__start_time"],
                "environment_compatible": test["test__environment_compatible"],
            }
            for test in tests
        ]

    @extend_schema(
        request=IssueDetailsRequest, responses=IssueTestsResponse, methods=["GET"]
    )
    def get(self, _request, issue_id: Optional[str]) -> Response:
        try:
            parsed_params = IssueDetailsPathParameters(issue_id=issue_id)
        except ValidationError as e:
            return Response(data=e.json(), status=HTTPStatus.BAD_REQUEST)

        version = _request.GET.get("version")
        if version is None:
            version_row = fetch_latest_issue_version(issue_id=parsed_params.issue_id)
            if version_row is None:
                return create_api_error_response(
                    error_message="Issue not found", status_code=HTTPStatus.OK
                )
            version = version_row["version"]

        tests_data = self._fetch_incidents(
            issue_id=parsed_params.issue_id, version=version
        )

        if not tests_data:
            return create_api_error_response(
                error_message="No tests found for this issue", status_code=HTTPStatus.OK
            )

        try:
            valid_response = IssueTestsResponse(tests_data)
        except ValidationError as e:
            return Response(data=e.json(), status=HTTPStatus.INTERNAL_SERVER_ERROR)

        return Response(data=valid_response.model_dump())
