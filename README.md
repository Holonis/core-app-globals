# `@holonis/core-app-globals`

A holder for important, sharable app parts like the logger and config objects

This simply provides us with a way to keep the global values for the app in a
single location.  **This should be used sparingly.**  Sometimes we have a thing that is so fundamental to any app that we need to have a place for it.  In those cases we have aggreed to provide a setter and getter for the object we need.  As
of right now we support only:

- config
- log
  
## Usage

To set the globals:

```
const appGlobals = require('@holonis/core-app-globals');

// Do stuff to get config created

appGlobals.setConfig(config);

// Do stuff to get logger created

appGlobals.setLog(log);
```

To use the globals:

```
const appGlobals = require('@holonis/core-app-globals');

const log = appGlobals.getLog();
const config = appGlobals.getConfig();
```

# Considerations

It is common for the log to need the config.  Because of that it is a good idea
to initialize the config forst and apply it to the globals.  That way when we
try to configure the log we will be able to refer to configuration values such
as those we need when connecting to Loggly (our current log provider).

## Not just any config will do

Because the purpose of this package it to provide a way to share certain application resources within other packages (like core-logging) we need for the config object to have a compatible interface.  We are not particularly concerned about implementation details, only that the config object has a `get` method which takes a property path (like `kafka.enabled`) and returns the value.  It expects the config to throw a descriptive Error if the requested value is unavailable.  Nothing else is required for this package and its users.  The underlying source(s) of configuraion values (files, environment, HTTP service(s) or their life-cycle (read at startup or allowing live changes) are not important here.

## Not just any log will do

For similar reasons to those above we only support a log object that has methods for `info`, `warn` and `error`.  Those methods should be compatible with the `core-logging` Logger but if they are not it will not break this package.  It may break **other** packages that rely on this one though.  In particular if the number or type of arguments is different log messages may be sent to Loggly (or the console even) in a more or less scrambled fashion.  The most supported logger is the one provided by the `core-app-log` package.  It is possible to provide a different one as long as it is closely similar to that one though or even just one taken directly from the `core-logger` package and configured by your application.
