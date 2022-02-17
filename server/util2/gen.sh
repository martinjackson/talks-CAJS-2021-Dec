#!/bin/bash

# cwd
# ~/projects/talks-CAJS-2021-Dec/server/util2/

DIR=~/projects/talks-CAJS-2021-Dec/server/util2/
echo "DIR: $DIR"

cd ~/projects/create-table-to-graphql.schema

# node create-dataStruct.js --in DataStar/sample_data_movies_mysql.sql --out data/dataStruct.json
# echo "--------------------"

# node gen-graphql-schema.js --camelCase true --in $DIR/dataStruct.json --schema SEPS --directory $DIR/data
node gen-graphql-schema.js --in $DIR/dataStruct.json --schema SEPS --directory $DIR/data
echo "--------------------"

#
cd $DIR
cp data/* ../server/db/
