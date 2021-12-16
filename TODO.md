__for Working Demo__

- [x] mermaid data flow diagram
- [x] add "no Camel" switch to schema.graphql generator 
- [x] rework getSQLResult(sql) -> getDBQuery({table,fields,where})


- [ ] working helpers.js        
- [ ] working resolvers.js

__for Presentation__
- [ ] google chrome browser in vscode 


BUGS
- [ ] equivalent GraphQL types where not generated
  CREATE TABLE `movie_cast` (
  CREATE TABLE `movie_company` (
  CREATE TABLE `movie_crew` (
  CREATE TABLE `movie_genres` (
  CREATE TABLE `movie_keywords` (
  CREATE TABLE `movie_languages` (
  CREATE TABLE `production_country` (






__Extras__
https://towardsdatascience.com/build-a-stunning-readme-for-your-github-profile-9b80434fe5d7

https://saurabhnative.hashnode.dev/introducing-readme-gen-most-advanced-readme-generator-for-your-opensource-projects
https://readme-gen.vercel.app/app


https://github.com/DavidWells/advanced-markdown/blob/master/README.md

## Markdown basics

The basics of markdown can be found [here](https://guides.github.com/features/mastering-markdown/) & [here](https://daringfireball.net/projects/markdown/). Super easy!

## Advanced Formatting tips

### `left` alignment

<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">

This is the code you need to align images to the left:
```
<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">
```

---

### `right` alignment

<img align="right" width="100" height="100" src="http://www.fillmurray.com/100/100">

This is the code you need to align images to the right:
```
<img align="right" width="100" height="100" src="http://www.fillmurray.com/100/100">
```

---

### `center` alignment example

<p align="center">
  <img width="460" height="300" src="http://www.fillmurray.com/460/300">
</p>

```
<p align="center">
  <img width="460" height="300" src="http://www.fillmurray.com/460/300">
</p>
```

---

### light/dark mode images

Tip via this [tweet](https://twitter.com/stefanjudis/status/1465775940034781186). Swap out images based on theme settings

```
![Logo](./dark.png#gh-dark-mode-only)
![Logo](./light.png#gh-light-mode-only)
```

### `collapse` Sections

Collapsing large blocks of text can make your markdown much easier to digest

<details>
<summary>"Click to expand"</summary>
this is hidden block
</details>

```
<details>
<summary>"Click to expand"</summary>
this is hidden
</details>
```

Collapsing large blocks of Markdown text

<details>
<summary>To make sure markdown is rendered correctly in the collapsed section...</summary>

 1. Put an **empty line** after the `<summary>` block.
 2. *Insert your markdown syntax*
 3. Put an **empty line** before the `</details>` tag
 
</details>

```
<details>
<summary>To make sure markdown is rendered correctly in the collapsed section...</summary>
 1. Put an **empty line** after the `<summary>` block.
 2. *Insert your markdown syntax*
 3. Put an **empty line** before the `</details>` tag
 
</details>
```
