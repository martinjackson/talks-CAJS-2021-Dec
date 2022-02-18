
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const cfg = {
    user: process.env.User,
    pass: process.env.Password,
};

// console.table(cfg);

const uri = `mongodb://${cfg.user}:${cfg.pass}@localhost:27017`;
const client = new MongoClient(uri);



// -----------------------------------------------------------------------------------------------
async function neverCalled() {
        // Ensures that the client will close when you finish/error
}

// -----------------------------------------------------------------------------------------------
export async function OKgetQueryResult(dbCollection, fields, where) {
    console.log('Foo');

    return {foo: "foo"}
}

// -----------------------------------------------------------------------------------------------
export async function getQueryResult(dbCollection, fields, where) {

    let result = {rows: []}

    console.log('dbCollection:',dbCollection, 'fields:', fields, 'where:',where);

    const [dbName, collection] = dbCollection.split('.')

    console.log('db:', dbName, 'collection:', collection, 'where:', where);
    try {
        await client.connect();        
        const db = client.db(dbName);
        result = await db.getCollection(collection).find(where);
        console.log('results back.');
    } catch (err) {
        console.log('Err:', err);
        throw err;
    } finally {
        await client.close();
    }

    console.log('----------------------------------------------');
    console.log('rows:', JSON.stringify(result.rows, null, 2) );
    // console.trace("**** getQueryResult ****")
    console.log('----------------------------------------------');

    return result.rows
}

// -----------------------------------------------------------------------------------------------
export async function execDbCmd(action, dbCollection, fields) {
    /*
    let conn = await getDb()
    const result = await conn.execute(sql, binds, {autoCommit: true});
    await conn.close();
    return result
    */

    return {}
}

// -----------------------------------------------------------------------------------------------
async function run() {

    console.log('db-specific.js run() started');
    try {            
      console.log('-1. run()')
      await client.connect()     

      console.log('0. run()');

      const db = client.db("movies");
      const result = await db.getCollection('movie').find({});
      console.log("1. run() result:", result);

    } catch (err) {
        console.log('2. run() Err:', err);
        throw err;
    } finally {
        console.log('3. run() finally');
    }

    /*
     finally {
      await client.close();
    }
    */
  }
  
// -----------------------------------------------------------------------------------------------
async function run2() {

    console.log('db-specific.js run2() started');
    let fields = { "movie_id": "movie_id","title": "title","budget": "budget","homepage": "homepage","overview": "overview","popularity": "popularity","release_date": "release_date","revenue": "revenue","runtime": "runtime","movie_status": "movie_status","tagline": "tagline","vote_average": "vote_average","vote_count": "vote_count" }
    try {
        console.log('1. run2()');
        const result = await getQueryResult('movies.movie', fields, {});
        console.log("run2() result:", result);

    } catch (err) {
        console.log('Err:', err);
        throw err;
    } finally {
        console.log('3. run2()');
    }

}

  try {
      run()
  } catch(err) {
      console.log('startup db-specific.js run() failed.');
      console.dir(err)
  } finally { 
      console.log("run() was sucessful.") 
  }; 

  /*
  try {
    run2()
} catch(err) {
    console.log('startup db-specific.js run2() failed.');
    console.dir(err)
} finally { 
    console.log("run2() was sucessful.") 
}; 
*/