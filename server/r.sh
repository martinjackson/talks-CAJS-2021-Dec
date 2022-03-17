#!/bin/bash

NOW=$(date +'%F')
rm logs/server-$NOW.log
./start.sh

