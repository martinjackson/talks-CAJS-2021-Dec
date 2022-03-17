#!/bin/bash

mkdir -p logs

node --trace-warnings server.js GraphQL-MONGO &
