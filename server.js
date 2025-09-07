
const express = require('express');
const path = require('path');


const app = express();
const port = 3000; 


app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contactus', (req, res) => {
  res.sendFile(path.join(__dirname, 'contactus.html'));
});

app.get('/heritage', (req, res) => {
  res.sendFile(path.join(__dirname, 'heritage.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/safety', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Culture', (req, res) => {
  res.sendFile(path.join(__dirname, 'Culture.html'));
});

app.get('/wildlife', (req, res) => {
  res.sendFile(path.join(__dirname, 'wildlife.html'));
});





app.listen(port, () => {
  console.log(`Server is running!`);
  console.log(`Open your browser and go to http://localhost:${port}`);
});
