const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes',{useCreateIndex: true,
useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('you are connected')
});