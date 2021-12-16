/* eslint-disable object-shorthand */
/* eslint-disable no-multi-spaces */
/* eslint-disable indent */

import path from 'path'
import { serve } from '@martinjackson/simple-express'
import apiRoutes from './apiRoutes.js'

serve(apiRoutes, '../.env')

// run with --help for all the options
// use ./start.sh or ./test.sh to start (easier to stop later)

