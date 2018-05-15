const request = require('request');
const dateFormat = require('dateformat');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set("views", "public/views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let pseudo = req.body.pseudo;

    if(pseudo) {
        res.redirect('/' + req.body.pseudo);
    } else {
        res.redirect('/');
    }
});

app.get('/:user*?', (req, res) => {
    let username = req.params.user;

    if(username) {
        request({
            url: 'https://api.github.com/users/' + username,
            headers: { 'User-Agent': 'Student-UA', 'Authorization': 'token e718c4c537d6bc518bade83e4041e0f34dc6be2b' }
        }, (err, response, body) => {
            if (err) {
                console.error(err);
            } else {
                const data = JSON.parse(body);

                res.render('user', {
                    user: data,
                    created_at: dateFormat(data.created_at, "dd/mm/yyyy")
                });
            }
        });
    }
});

app.listen(3000);
