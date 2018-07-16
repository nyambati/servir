module.exports = [
  {
    header: `Servir ${require('../package.json').version}`,
    content:
      ' Serves static files and SPA application on production environment'
  },
  {
    header: 'Synopsis',
    content: [
      '$ serve [directory] {bold --port} 3000 {bold --https} ...',
      '$ serve {bold --help}'
    ]
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        description: 'Print this usage guide.'
      },
      {
        name: 'help',
        alias: 'h',
        description: 'Print this usage guide.'
      },
      {
        name: 'port',
        alias: 'p',
        description: 'Port to run application on, default 4040.'
      },
      {
        name: 'app',
        alias: 'a',
        description: 'Name of the application'
      },
      {
        name: 'logstash',
        alias: 'l',
        description: 'Create logstash formatted logs'
      },
      {
        name: 'logsDir',
        alias: 'd',
        description: 'Directory to place logs when file logs are enabled'
      },
      {
        name: 'rotate',
        alias: 'r',
        description: 'Enable file logging on daily rotate cycle'
      },
      {
        name: 'secure',
        alias: 's',
        description: 'Enforce https redirection'
      }
    ]
  }
];
