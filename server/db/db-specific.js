
import { MongoClient } from "mongodb"

const uri = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false'
const client = new MongoClient(uri);


//    query("movies", 'movie', {title: /.*Star Wars.*/})
//        .then( result => result.map(r => console.dir(r.title)) )
//        .catch(console.dir);


// -----------------------------------------------------------------------------------------------
async function query(dbName, collectionName, where) {

    // const where = {title: /.*Star Wars.*/}
    // const where1 = {movie_id: 11}

    const result = []

    try {            
      await client.connect()     

      const collection = client.db(dbName).collection(collectionName)
      const cursor = collection.find(where);

      await cursor.forEach(rec => result.push(rec));       // does not work without await    

      await client.close()     
      return result

    } catch (err) {
        console.log('Err:', err);
        throw err;
    } 

}

// -----------------------------------------------------------------------------------------------
export async function getQueryResult(dbCollection, fields, where) {

    const [dbName, collection] = dbCollection.split('.')
    
    // query("movies", 'movie', {title: /.*Star Wars.*/})
    const result = await query(dbName, collection, where)
    const cnt = result.length

    console.log('----------------------------------------------');
    console.dir(`result [${cnt}]:`, result[0] );         
    console.log('----------------------------------------------');
    
    return result
}

// -----------------------------------------------------------------------------------------------
export async function execDbCmd(action, dbCollection, fields) {

    return {}
}

