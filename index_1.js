import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

/*
Routes are ‘virtual’ handlers for URLs that might receive a user’s request. Routes don’t necessary correspond to a physical page on the web site.

Routes can be exclusive, or can use the ‘next’ method to pass control to the next applicable route in sequence.
*/

app.get('/foo', (req,res,next) => {
    if(Math.random() < 0.5) return next();
    res.send('sometimes this');
});
app.get('/foo', (req,res) => {
    res.send('and sometimes that');
});


app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});