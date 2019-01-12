[![CircleCI](https://circleci.com/gh/zishe/anydo-server.svg?style=svg)](https://circleci.com/gh/zishe/anydo-server)
[![Build Status](https://travis-ci.org/zishe/anydo-server.svg)](https://travis-ci.org/zishe/anydo-server)
[![Dependency Status](https://david-dm.org/zishe/anydo-server.svg)](https://david-dm.org/zishe/anydo-server)
[![devDependencies Status](https://david-dm.org/zishe/anydo-server/dev-status.svg)](https://david-dm.org/zishe/anydo-server)

# AnyDo

## Dev Build for local machine (without docker)


There 3 applications, so it will be 3 console processes.

### Admin

```bash
$ cd admin
$ gem install bundler
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails s
```

### Cleint

```bash
$ yarn
$ yarn dev:web
```

### Server

```bash
$ yarn
$ yarn dev
```

# Docker

```bash
$ docker-compose up
```

#### To restore database:

```
$ cat anydo_last.sql | docker exec -i any-do_db_1 psql -Upostgres
```
