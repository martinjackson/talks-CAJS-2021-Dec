<div id="top"></div>
<!--
Later...
https://github.com/othneildrew/Best-README-Template
-->

<h2 align="center">Central Arkansas JavaScript.com</h2>

<p align="center">
<img src="images/CAJS-logo-transparent-trimmed.png" />
</p>

<h3 align="center">Using GraphQL with MongoDB</h3>
<h3 align="center">December 16, 2021</h3>

---

<img  align="right" src="images/martin-IMG-8015-small.png" height="120px" />

__Martin Jackson__

__Email:__ martin.a.jackson@gmail.com

__Twitter:__ <a href="https://twitter.com/martin_jackso"> @martin_jackso</a>

---

![My opinions are my own](images/nctr-disclaimer.png)

---
### I am using Mermaid Graphs in this Markdown (Now supported by GitHub as of 02-14-2022)

Chrome Plugin: https://chrome.google.com/webstore/detail/github-%20-mermaid/goiiopgdnkogdbjmncgedmgpoajilohe?hl=en

---

https://www.databasestar.com/sample-data-download-page

```mermaid
graph TD;
    A[www.databasestar.com sample-data-download-page] --> M[sample_data_movies_mysql.sql];
    M --> C[MySQL DB];
    C -->|1. convert-mysql-to-mongo.js| D[Mongo DB];
    M -->|2. create-dataStruct.js| E[dataStruct.json];
    E -->|2. gen-graphql-schema.js| F[schema.graphlq resolvers.js];
    F --> G[Nodejs Express GraphQL]
    G --> H[GraphQLi web interface]
    H -->|future| I[React Single-Page-App]
    D -.-> G
    G -.-> D
```

[1] `node ` [convert-mysql-to-mongo.js](./code/convert-mysql-to-mongo.js)

[2] Use of create-dataStruct.js gen-graphql-schema.js
Source can be found [here](https://github.com/martinjackson/create-table-to-graphql.schema)
```bash
#!/bin/bash

node create-dataStruct.js --in ../sample_data_movies_mysql.sql --out data/dataStruct.json
echo "--------------------"
node gen-graphql-schema.js --in data/dataStruct.json --schema movies --directory data
echo "--------------------"
```
