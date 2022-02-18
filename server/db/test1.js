
import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const cfg = {
    user: process.env.User,
    pass: process.env.Password,
};

// console.table(cfg);

// const uri = `mongodb://${cfg.user}:${cfg.pass}@localhost:27017`;
const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const client = new MongoClient(uri);

// -----------------------------------------------------------------------------------------------
async function run() {

    console.log('db-specific.js run() started');
    try {            
      console.log('-1. run()')
      await client.connect()     

      console.log('0. run()');

      const db = client.db("movies");
      console.log('1. run()');

      const result = db.collection('movie').find({movie_id: 11});
      result.forEach(console.log)

      console.log('4. run() finally');
      // console.log('ser stat:', db.serverStatus());
      await client.close();

  } catch (err) {
        console.log('3. run() Err:', err);
        throw err;
    } 
}
  

  try {
      run()
  } catch(err) {
      console.log('startup db-specific.js run() failed.');
      console.dir(err)
  } finally { 
      console.log("run() finally") 
  }; 

