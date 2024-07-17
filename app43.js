const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app43 = express();

app43.use(bodyParser.urlencoded({ extended: true }));
app43.use(bodyParser.json());

const accessTokenSecret = '123abc'
const refressTokenSecret = '1234abc'

const users = [
    {id: 1, username: 'nvdhai2003', password: 'abc123'}
]

function generateAccessToken(user) {
    return jwt.sign(user, accessTokenSecret, {expiresIn: '20m'});
}

function generateRefreshToken(user) {
    return jwt.sign(user, refressTokenSecret, {expiresIn: '10d'});
}

app43.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
    const user = users.find((u) => u.username === username && u.password === password)
    if (!user) {
        console.log("Username, password không chính xác");
        return;
    }

    const accessToken = generateAccessToken({id: user.id, username: user.username});
    const refreshToken = generateRefreshToken({id: user.id, username: user.username});
    res.json({accessToken, refreshToken});
    console.log('AccessToken: ', accessToken);
    console.log('RefreshToken: ', refreshToken);
})

app43.listen(3003, () => {
    console.log('Server listening on port 3003...');  // server is listening on port 3003 to receive requests from client-side applications.
})