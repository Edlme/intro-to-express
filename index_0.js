import express from 'express';

// your main application can be defined as an Express instance 
// with configuration:
const app = express();
app.set('port', process.env.PORT || 3000);

// Route handlers are specified with app.get() or app.post(), & error handlers w/ app.use():
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello World');
});

// send plain text response
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page');
});

// define 404 handler
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

// Once defined, the web server can be started like so
app.listen(app.get('port'), () => {
    console.log('Express started');
});