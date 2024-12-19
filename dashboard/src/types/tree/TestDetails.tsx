export type TTestDetails = {
  architecture: string;
  build_id: string;
  compiler: string;
  config_name: string;
  git_commit_hash: string;
  git_repository_branch: string;
  git_repository_url: string;
  id: string;
  log_excerpt: string | undefined;
  log_url: string | undefined;
  path: string;
  start_time: string;
  status: string;
  environment_compatible?: string[];
  environment_misc?: Record<string, unknown>;
  misc?: Record<string, unknown>;
  output_files?: Record<string, unknown>;
};
