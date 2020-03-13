const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => console.log(`successfull...`))
    .catch(err => console.log(`OH NO SOMETING WRONG, error: ${err}`))