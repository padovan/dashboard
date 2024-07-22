import { LOCALES } from '../constants';

export const messages = {
  [LOCALES.EN_US]: {
    buildAccordion: {
      buildLogs: 'Build logs',
      dtb: 'Dtb',
      dtbs: 'dtbs',
      kernelConfig: 'Kernel config',
      kernelConfigPath: 'config/kernel.config',
      kernelImage: 'Kernel image',
      logs: 'Logs',
      modules: 'Modules',
      modulesZip: 'modules.tar.xz',
      systemMap: 'System map',
      systemMapPath: 'kernel/System.map',
      testError: 'Test failed',
      testSkiped: 'Test skiped',
      testSuccess: 'Test success',
      testStatus: 'Test status',
    },
    global: {
      all: 'All',
      cleanAll: 'Clean all',
      errors: 'Errors',
      filters: 'Filters',
      none: 'None',
      seconds: 'sec',
      successful: 'Successful',
      architecture: 'Architecture',
      branch: 'Branch',
      configs: 'Configs',
      status: 'Status',
      timing: 'Timing',
    },
    routes: {
      deviceMonitor: 'Devices',
      labsMonitor: 'Labs',
      treeMonitor: 'Trees',
    },
    table: {
      itemsPerPage: 'Items per page:',
      of: 'of',
      showing: 'Showing:',
      tree: 'Tree',
    },
    treeDetails: {
      arch: 'Arch',
      boots: 'Boots',
      builds: 'Builds',
      buildErrors: 'Build errors',
      buildStatus: 'Build status',
      buildTime: 'BuildTime',
      config: 'Config',
      configs: 'Configs',
      compiler: 'Compiler',
      date: 'Date',
      executed: 'Executed',
      failed: 'Failed',
      null: 'Null',
      summary: 'Summary',
      status: 'Status',
      success: 'Success',
      tests: 'Tests',
    },
    treeTable: {
      branch: 'Branch',
      build: 'Build Status (Failed / Total)',
      commit: 'Tag - Commit',
      test: 'Test Status (Failed / Total)',
      tree: 'Tree',
    },
    filter: {
      architectureSubtitle: 'Please select one or more Architectures:',
      branchSubtitle: 'Please select one or more Branches:',
      configsSubtitle: 'Please select one or more configs:',
      filtering: 'Filtering',
      max: 'Max',
      min: 'Min',
      refresh: 'Refresh',
      statusSubtitle: 'Please select one or more Status:',
      treeURL: 'Tree URL',
      timingSubtitle: 'Please select a range of timing:',
    },
  },
};
