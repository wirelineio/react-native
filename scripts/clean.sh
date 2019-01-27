#!/bin/sh

rm yarn.lock
rm -rf node_modules/
yarn cache clean
watchman watch-del-all
yarn
