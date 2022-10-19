import express from 'express';


const app = express();
app.set('port', process.env.PORT || 3000);
// set the view engine to ejs
app.set('view engine', 'ejs');
/*
Express can use a template engine to render dynamic pages with information that differs with each request.
There are several engines to choose from but let's start with EJS
Next, update your server application to use the EJS engine and render an HTML 'view' to the client :

- Express expects the views in a /views sub-folder
- Express can use partials for elements to display on multiple pages.
- EJS expects views and partials files to have a .ejs file extension,

*/

// send content of 'home' view to browser
app.get('/get', (req,res) => {
    res.render('home', {title: req.query.title });
   });

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});


app.listen(app.get('port'), () => {
    console.log('Express started');
});