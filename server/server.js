
import serviceRunning from 'service-already-running'

// import { serve } from '@martinjackson/simple-express'
import pkg from '@martinjackson/simple-express';
const { serve } = pkg;
import apiRoutes from './apiRoutes.js'

const run = async () => {
    console.log('\n-------------------------------------------------------');  
    await serviceRunning.killOthers();

    serve(apiRoutes, '.env')
}

run()
