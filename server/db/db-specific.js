
import { MongoClient } from "mongodb"

const uri = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false'
const client = new MongoClient(uri);

// const where = {title: /.*Star Wars.*/}
// const where1 = {movie_id: 11}
// 
//    query("movies", 'movie', where)
//        .then( result => result.map(r => console.dir(r.title)) )
//        .catch(console.dir);


// -----------------------------------------------------------------------------------------------
async function query(dbName, collectionName, args) {

    const where = (args.where) ? args.where : args
    console.log('query(', dbName, collectionName, where,')');

    try {            
      await client.connect()     

      const collection = client.db(dbName).collection(collectionName)
      const cursor = collection.find(where);

      const result = []
      await cursor.forEach(rec => result.push(rec));       // does not work without await    

      await client.close()     
      return result

    } catch (err) {
        console.log('Err:', err);
        throw err;
    } 

}

// -----------------------------------------------------------------------------------------------
export async function getQueryResult(dbCollection, fields, args) {

    const [dbName, collection] = dbCollection.split('.')
    
    // query("movies", 'movie', {title: /.*Star Wars.*/})
    const result = await query(dbName, collection, args)
    const cnt = result.length

    console.log('----------------------------------------------');
    console.log(`result [${cnt}]:`, result[0] );         
    console.log('----------------------------------------------');
    
    return result
}

// -----------------------------------------------------------------------------------------------
export async function execDbCmd(action, dbCollection, fields) {

    return {}
}

