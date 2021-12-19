
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const cfg = {
    user: process.env.User,
    pass: process.env.Password,
};


const uri = `mongodb://${cfg.user}:${cfg.pass}@localhost/movies`;
const client = new MongoClient(uri);

// -----------------------------------------------------------------------------------------------
async function run() {
  try {
    await client.connect();
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


// -----------------------------------------------------------------------------------------------
export async function getQueryResult(dbCollection, fields, where) {

    let result
    result.rows =[]

    const [dbName, collection] = dbCollection.split('.')

    try {
        await client.connect();
        const db = client.db(dbName);
        result = await db.getCollection(collection).find(where);
    } catch (err) {
        console.log('Err:', err);
        throw err;
    } finally {
        // Ensures that the client will close when you finish/error
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
