#!/bin/bash

CMD="server.js GraphQL-MONGO"

ps aux | grep "$CMD" | grep -v grep | awk '{print $2}' | xargs sudo kill 

ps aux | grep "$CMD" | grep -v grep 
