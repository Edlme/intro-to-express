import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

// Route paths can contain regular expressions, to match variations. 
// For example, the below route would match /user or /username:
app.get('/user(name)?', (req,res) => {
    res.send('user');
});


app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});