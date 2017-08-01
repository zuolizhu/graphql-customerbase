const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

let port = 8000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});