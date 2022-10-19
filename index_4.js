import express from 'express';


const app = express();
app.set('port', process.env.PORT || 3000);

/*
Express simplifies the work of getting querystring data and form submissions.

You can access querystring values with the req.query object like so:
*/
app.get('/get', (req,res) => {
    console.log(req.query); // display parsed querystring object
  });

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});


app.listen(app.get('port'), () => {
    console.log('Express started');
});