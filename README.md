# static-serve

This is an experimental server to host production static apps, it will be able to collect and rotate logs.

Its build using the following modules

- ExpressJs
- Winston
- Express winston
- Minimist

## Commands

This apps works by running `serve [options]` the options are provided belows

### Options

- --dir : Specifies the directory static files should be served from
- --logstash : Instructs creation of logs formated for logstash
- --logsDir : Specifies the folder to place logs, default `logs`
- --app : Specifies the name of the application, used to name logs files, default `combined`
- --https : Specifies whether we should enforce https redirection default `false`.
- --port : Specifies the port to start server at. Default 4040

#### Environment variables for options

- PUBLIC_DIR : specifies the directory static files should be served from
- ENABLE_LOGSTASH : Specifies the folder to place logs, default `logs`
- LOGS_DIR : Specifies the folder to place logs, default `logs`
- APP_NAME : Specifies the name of the application, used to name logs files, default `combined`
- HTTPS : Specifies whether we should enforce https redirection default `false`.
- PORT : Specifies the port to start server at. Default 4040
- ROTATE_LOGS : Instructs to rotate logs, default true

## Testing

Manual testing, clone this repository and link the application by running `npm link` on the root directory. You should be able to have serve binary on your machine. Run `serve` with the above commands.

> > Note: This docs are bound to change.
