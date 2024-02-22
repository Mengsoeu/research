const express = require('express');
const crud = require('../controller/crudcontroller');

const router = express();

//get json data
router.get('/',crud.load);
router.get('/api',crud.get_info);

//insert data 
router.post('/api',crud.create_info);

//delete data
// router.delete('/delete',crud.del_info);


module.exports = router;