import { z } from 'zod';

import type {
  ArchCompilerStatus,
  BuildsTabBuild,
  BuildStatus,
  StatusCount,
  StatusCounts,
  TestHistory,
  TIssue,
} from '@/types/general';

type BuildSummary = {
  builds: BuildStatus;
  configs: Record<string, BuildStatus>;
  architectures: Record<
    string,
    {
      valid: number;
      invalid: number;
      null: number;
      compilers: string[];
    }
  >;
};

type BuildsData = {
  items: BuildsTabBuild[];
  issues: TIssue[];
  summary: BuildSummary;
  failedWithUnknownIssues: number;
};

type Tests = {
  archSummary: ArchCompilerStatus[];
  history: TestHistory[];
  platformsFailing: string[];
  statusSummary: StatusCounts;
  failReasons: Record<string, unknown>;
  configs: Record<string, StatusCounts>;
  issues: TIssue[];
  failedWithUnknownIssues: number;
};

type TTreesStatusSummary = {
  builds: Partial<BuildStatus>;
  boots: StatusCount;
  tests: StatusCount;
};

export type Trees = {
  treeName?: string;
  gitRepositoryBranch?: string;
  gitRepositoryUrl?: string;
  headGitCommitName?: string;
  headGitCommitHash?: string;
  selectedCommitStatusSummary?: TTreesStatusSummary;
  index: string;
};

export type THardwareDetails = {
  builds: BuildsData;
  tests: Tests;
  boots: Tests;
  trees: Trees[];
  configs: string[];
  archs: string[];
  compilers: string[];
};

export interface THardwareDetailsFilter
  extends Partial<{
    [K in keyof Omit<
      BuildsTabBuild,
      'test_status' | 'misc' | 'valid' | 'tree_name' | 'tree_index'
    >]: BuildsTabBuild[K][];
  }> {
  valid?: string[];
}

export const zTreeCommits = z.record(z.string()).default({});
export type TTreeCommits = z.infer<typeof zTreeCommits>;
