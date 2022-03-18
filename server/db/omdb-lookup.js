
import fs from 'fs'
import path from 'path'

// Stupid ES Module work arounds since NodeJS devs favor CJS
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config({ path: "./.env" });    // relative to main directory

const KEY = process.env.OMDB_APIKEY;
if (!KEY) {
    console.log('.env OMDB_APIKEY is missing.');
}

// import omdbCache from './omdbCache.json'        requires NodeJS flag ie. node --experimental-json-modules 
const omdbCacheFile = path.resolve(__dirname, 'omdbCache.json')
const omdbCache = JSON.parse(fs.readFileSync(omdbCacheFile, 'utf8'));
// const omdbCache = {}

let omdbCacheSaveInProgress = false;
let omdbCacheNeedsSaving = false;


/*
Martin Jackson is a patreon.com member supporting 
Brian Fritz ( is creating The Open Movie Database API )
as of 2022-03-16

Basic
$1 per month
Basic API Access
100,000 requests per day

https://www.omdbapi.com/?apikey=${KEY}&t=Star+Wars

const result = {
  Title: "Star Wars: Episode IV - A New Hope",
  Year: "1977",
  Rated: "PG",
  Released: "25 May 1977",
  Runtime: "121 min",
  Genre: "Action, Adventure, Fantasy",
  Director: "George Lucas",
  Writer: "George Lucas",
  Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
  Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
  Language: "English",
  Country: "United States",
  Awards: "Won 7 Oscars. 63 wins & 29 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.6/10" },
    { Source: "Rotten Tomatoes", Value: "92%" },
    { Source: "Metacritic", Value: "90/100" },
  ],
  Metascore: "90",
  imdbRating: "8.6",
  imdbVotes: "1,306,447",
  imdbID: "tt0076759",
  Type: "movie",
  DVD: "06 Dec 2005",
  BoxOffice: "$460,998,507",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

TODO: (Remember) Hot Key: code formatting on Linux    Ctrl + Shift + I

The code formatting is available in Visual Studio Code through the following shortcuts:

    On Windows  Shift + Alt + F
    On Mac      Shift + Option + F
    On Linux    Ctrl + Shift + I

*/



// -----------------------------------------------------------------------------------------------
export function getPoster(id, title) {

  if (omdbCache[id]) {
      return omdbCache[id]?.Poster;
  } else {
      lookupOmdbInfo(id, title)  // dont have it, look up for next query
      return null
  }
}

// -----------------------------------------------------------------------------------------------
function lookupOmdbInfo(id, title) {

    return;      //  {"Response":"False","Error":"Request limit reached!"}  2022-03-17 4pm CDT

    const url = 'https://www.omdbapi.com/?apikey='+KEY+'&t='+encodeURIComponent(title)
    const settings = { method: "Get" };

    console.log('id:', id, 'title:', title, 'url:',url);
    omdbCache[id] = {}   // even before we have answer, mark that a lookup is in-progress

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            omdbCache[id] = json
            omdbCacheNeedsSaving = true

            console.log('--------------------[omdbapi sucess]---------------------------------');
            console.log('url:',url, 'Poster:', json.Poster);
        })
        .catch(err => {
            console.log('--------------------[omdbapi fail]---------------------------------');
            console.log('url:',url);
            console.log('err:',err);
        })
}

// -----------------------------------------------------------------------------------------------
export function saveOmdbInfo() {

    if (omdbCacheNeedsSaving && !omdbCacheSaveInProgress) {
        console.log('needs saving omdbCache ...');

        omdbCacheSaveInProgress = true
        let data = JSON.stringify(omdbCache);
        fs.writeFile(omdbCacheFile, data, (err) => {
            omdbCacheSaveInProgress = false
            if (err) {
                console.log('save fail:', err);
                throw err;
            } else {
                omdbCacheNeedsSaving = false
                console.log('save complete:', omdbCacheFile);
            }
        })
    }
}

