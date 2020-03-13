const express = require('express'),
app = express(),
port = 8000,
server = app.listen(port , () =>(`Listening in port ${port}`)
);

app.use(express.json(), express.urlencoded({extended: true}));

require('./server/config/database.config');

require('./server/routes/jokes.routes')(app);
