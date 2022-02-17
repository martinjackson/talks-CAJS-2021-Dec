#!/bin/bash

fullfile=${0}                  # possibly pathed scriptname

cd "$(dirname "$0")"

pwd

mkdir -p logs

# stop previous if it is running
. ./stop.sh

CMD="server.js GraphQL-MONGO"

node --trace-warnings $CMD &
echo "$!" >server.pid


ps aux | grep "$CMD" | grep -v grep 