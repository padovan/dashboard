import { useMemo } from "react";

import { TableRow, TableCell } from "../ui/table";

import { TreeTableBody } from "../../types/tree/Tree";

import BaseTable from "./BaseTable";

interface ITreeTable {
  treeTableRows: TreeTableBody[];
}

const treeTableColumnsLabelId = [
  'treeTable.tree',
  'treeTable.branch',
  'treeTable.commit',
  'treeTable.build',
  'treeTable.test'
];

const TreeTableRow = (row: TreeTableBody): JSX.Element => {
  return (
    <TableRow>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.branch}</TableCell>
      <TableCell>{row.commit}</TableCell>
      <TableCell><div className="bg-lightGray w-fit h-fit p-1 rounded-lg">{row.buildStatus}</div></TableCell>
      <TableCell><div className="bg-lightGray w-fit h-fit p-1 rounded-lg">{row.testStatus}</div></TableCell>
    </TableRow>
  );
};

  const TreeTable = ({treeTableRows}: ITreeTable) : JSX.Element => {
  const treeTableBody = useMemo(() => {
    return (
      treeTableRows.map((row: TreeTableBody) => (
        <TreeTableRow 
          key={row.commit} 
          name={row.name}
          branch={row.branch}
          commit={row.commit}
          buildStatus={row.buildStatus}
          testStatus={row.testStatus}/>
      ))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeTableRows]);

  return(
    <BaseTable headers={treeTableColumnsLabelId} body={<>{treeTableBody}</>} />
  );
}

export default TreeTable;