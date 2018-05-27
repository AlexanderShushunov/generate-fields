#!/usr/bin/env bash
source ~/.nvm/nvm.sh
nvm exec 10 node --experimental-modules ./src/index.mjs $1