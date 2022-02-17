
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const cfg = {
    user: process.env.User,
    pass: process.env.Password,
};


const uri = `mongodb://${cfg.user}:${cfg.pass}@localhost/movies`;
const client = new MongoClient(uri);


let connectionMade = false;
// -----------------------------------------------------------------------------------------------
export async function makeConn() {

    try {
        await client.connect();
        connectionMade = true
    } catch (err) {
        console.log('Err:', err);
        throw err;
    } 
}

// -----------------------------------------------------------------------------------------------
export async function checkConn() {

    if (!connectionMade) {
        try {
            await makeConn()
        } catch (err) {
            throw err;
        }
    }

    return connectionMade
}

// -----------------------------------------------------------------------------------------------
async function neverCalled() {
        // Ensures that the client will close when you finish/error
        await client.close();
}

// -----------------------------------------------------------------------------------------------
export async function getQueryResult(dbCollection, fields, where) {

    let result
    result.rows =[]

    const [dbName, collection] = dbCollection.split('.')

    try {
        await checkConn()
        const db = client.db(dbName);
        result = await db.getCollection(collection).find(where);
    } catch (err) {
        console.log('Err:', err);
        throw err;
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
    try {    
      await makeConn()           // await client.connect();
      const db = client.db("movies");
      const result = await db.getCollection('movie').find({});
      console.log(result);
    } finally {
      await client.close();
    }
  }
  
  try {
      run()
  } catch(err) {
      console.dir(err)
  } finally { 
      console.log("Mongo connection sucessful.") 
  }; 
  