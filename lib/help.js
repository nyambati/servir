module.exports = [
  {
    header: "Static Serve",
    content: " Serves static application on production environment"
  },
  {
    header: "Synopsis",
    content: [
      "$ serve [directory] {bold --port} 3000 {bold --https} ...",
      "$ serve {bold --help}"
    ]
  },
  {
    header: "Options",
    optionList: [
      {
        name: "version",
        alias: "v",
        description: "Print this usage guide."
      },
      {
        name: "help",
        alias: "h",
        description: "Print this usage guide."
      },
      {
        name: "port",
        alias: "p",
        description: "Port to run application in, default 4040."
      },
      {
        name: "app",
        alias: "a",
        description: "Name of the application"
      },
      {
        name: "logstash",
        alias: "l",
        description: "Create logstash formatted logs"
      },
      {
        name: "logsDir",
        alias: "d",
        description: "Logs directory"
      },
      {
        name: "rotate",
        alias: "r",
        description: "Rotates logs daily"
      },
      {
        name: "secure",
        alias: "s",
        description: "Enforce https redirection"
      }
    ]
  }
];
