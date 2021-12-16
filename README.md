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

https://www.databasestar.com/sample-data-download-page

```mermaid
graph TD;
    A[www.databasestar.com sample-data-download-page] -->|sample_data_movies_mysql.sql| C[MySQL];
    C -->|convert-mysql-to-mongo.js| D[MongoDB];
    C -->|convert-mysql-to-mongo.js| E[dataStruct.json];
    E -->|gen-graphql-schema.js| F[schema.graphlq];
```

`node ` [convert-mysql-to-mongo.js](./code/convert-mysql-to-mongo.js)


```bash
#!/bin/bash

node create-dataStruct.js --in ../sample_data_movies_mysql.sql --out data/dataStruct.json
echo "--------------------"
node gen-graphql-schema.js --in data/dataStruct.json --schema movies --directory data
echo "--------------------"
```