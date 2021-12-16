
import oracledb from 'oracledb'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const DBhosts = {
      'PROD': process.env.PRODHost,
      'DEV': process.env.DEVHost,
      'TEST': process.env.TESTHost
}

let dbConfig = {
      user: process.env.User,
      password: process.env.Password,
      connectString: DBhosts[process.env.DB_TYPE],
};

// The oracle defaults
oracledb.autoCommit = true;             // Always commit the transaction to the database
oracledb.extendedMetaData = true;       // Indicates additional metadata, such as name, fetchType, precision, scale, or nullable, is available for queries
oracledb.maxRows = 1000000;             // Maximum number of rows that can be returned
oracledb.outFormat = oracledb.OBJECT;   // Display the output as an array instead of an object

async function getCon() {
    let conn = await oracledb.getConnection(dbConfig);
    return conn
}

export async function getQueryResults(sql) {

    let result
    try {
        let conn = await getCon()
        result = await conn.execute(sql);
        await conn.close();
    } catch (err) {
        console.log('Err:', err);
        console.log('sql:', sql);
        throw err;
    }

    console.log('----------------------------------------------');
    console.log('sql:', sql);
    console.log('rows:', JSON.stringify(result.rows, null, 2) );
    // console.trace("**** getSQLResult ****")
    console.log('----------------------------------------------');

    return result.rows
}

export async function getBoundQueryResults(sql, binds) {

    let result
    try {
        let conn = await getCon()
        result = await conn.execute(sql, binds);
        await conn.close();
    } catch (err) {
        console.log('Err:', err);
        console.log('sql:', sql);
        console.log('binds:', binds);
        throw err;
    }

    console.log('----------------------------------------------');
    console.log('sql:', sql);
    console.log('binds:', binds);
    console.log('rows:', JSON.stringify(result.rows, null, 2) );
    // console.trace("**** getBoundSQLResult ****")
    console.log('----------------------------------------------');

    return result.rows
}

export async function execDbCmd(sql, binds) {
    let conn = await getCon()
    const result = await conn.execute(sql, binds, {autoCommit: true});
    await conn.close();

    return result
}
