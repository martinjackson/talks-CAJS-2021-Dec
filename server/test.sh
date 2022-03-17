#!/bin/bash

# cd db
# echo '{}' >omdbCache.json
# cd ..

NOW=$(date +'%F')
rm logs/server-$NOW.log
./start.sh

