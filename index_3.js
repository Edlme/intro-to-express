/*
Express route paths support a subset of regular expression metacharacters: +, ?, *, (, and )

Routes can include parameters that are automatically added to the request.parameters collection:
*/

import express from 'express';


const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/user/:username', (req, res) => {

    res.send(`Hello ${req.params.username}`);

})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});


app.listen(app.get('port'), () => {
    console.log('Express started');
});