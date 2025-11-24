## Test reproduction

First create a `.env` file with the postgres database url

```dotenv
POSTGRESQL_URL=postgresql://user:password@localhost/test-pgboss
```

Then try to install, build and start the project

```bash
bun install
bun --env-file=.env build
bun --env-file=.env start
```

The output of start is 

```
$ vinxi start

 ERROR  Cannot find module '/home/sebastien/dev/solid-pgboss/.output/server/node_modules/pg-boss/dist/node_modules/serialize-error/index.mjs' imported from /home/sebastien/dev/solid-pgboss/.output/server/node_modules/pg-boss/dist/src/manager.mjs                                                       12:20:19

    at finalizeResolution (node:internal/modules/esm/resolve:265:11)
    at moduleResolve (node:internal/modules/esm/resolve:933:10)
    at defaultResolve (node:internal/modules/esm/resolve:1169:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:540:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:509:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:239:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:96:40)
    at link (node:internal/modules/esm/module_job:95:36) 



 ERROR  Cannot find module '/home/sebastien/dev/solid-pgboss/.output/server/node_modules/pg-boss/dist/node_modules/serialize-error/index.mjs' imported from /home/sebastien/dev/solid-pgboss/.output/server/node_modules/pg-boss/dist/src/manager.mjs                                                       12:20:19

error: script "start" exited with code 1

```
