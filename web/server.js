const App = require('./public/server/app').App;
const express = require('express');
const app = express();

app.use(express.static('public/client'));

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get('*', async function(req, res) {
    const html = await App.App.getHTML(req.url);
    res.send(html.html);
})

app.listen(5555, function() {
    console.log('Running on http://localhost:' + 5555);
});
