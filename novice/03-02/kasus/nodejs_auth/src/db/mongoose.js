const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUserHJ:Janti24th@cluster0-yob0a.mongodb.net/test?retryWrites=true&w=majoritymongodb://dbUserHJ:Janti24th@ds127644.mlab.com:27644/nodeauth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to database');
}).catch(() => {
    console.log('failed connected to database');
});