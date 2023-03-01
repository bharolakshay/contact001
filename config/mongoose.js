const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/contact_list')
.then(() => console.log('Mongodb Connected!'));

