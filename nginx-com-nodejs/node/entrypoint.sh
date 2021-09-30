#!/bin/sh

npm install

node up.js

exec "$@"
