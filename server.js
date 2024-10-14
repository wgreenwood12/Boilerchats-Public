const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {db} = require("./database");
const groupmeCreator = require("./createGroupchats");
const Fuse = require('fuse.js');
const { default: axios } = require('axios');
const path = require('path')

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'vue-project', 'dist')))


let cachedData = [];

async function fetchTypeNum() {
  return new Promise((resolve, reject) => {
    const getIdNum = "SELECT * FROM guide";
    db.query(getIdNum, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
//loads data initially
(async function initializeCache() {
  try {
    cachedData = await fetchTypeNum();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();

app.get('/api/search', async (req, res) => {
  try {
    const options = {
      keys: [{name : 'course_type', weight: .98}, 
      {name : 'course_number', weight:.02}],
      includeScore: true, 
      threshold: 1  
    };

    const fuse = new Fuse(cachedData, options);
    searched = req.query.q
    const translated = fuse.search(searched)
    finalList = []
    translated.slice(0,50).map(end => {
      finalList.push(end.item)
    })
    res.send(finalList)
  } catch(err) {
    console.err
  }
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/api/reportBug', (req, res) => {
  const { email, description } = req.body;
  const mailOptions = {
    from: process.env.EMAIL + '@gmail.com',
    to: process.env.EMAIL + '@gmail.com',
    subject: 'Bug Report Form Submission',
    text: `You have received a Report Bug from ${email}.\n\nDescription:\n${description}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Bug report sent!');
    }
  });
})

app.post('/api/contactUs', (req,res) => {
  const { email, description } = req.body;
  const mailOptions = {
    from: process.env.EMAIL + '@gmail.com',
    to: process.env.EMAIL + '@gmail.com',
    subject: 'Contact Us Form Submission',
    text: `You have received a new Contact Us from ${email}.\n\nDescription:\n${description}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Response sent!');
    }
  });
})



app.post('/api/submitCourse', (req,res) => {
  const { email, link, courseCode, name } = req.body;
  const mailOptions = {
    from: process.env.EMAIL + '@gmail.com',
    to: process.env.EMAIL + '@gmail.com',
    subject: 'Submit Course Form Submission',
    text: `You have received a new Submit a Course from ${email}.\n\nCourse Name:\n${name}\n\nCourse Code:\n${courseCode}\n\nCourse Name:\n${link}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Course submission sent!');
    }
  });})


//TO CONFIGURE VUE SERVER WITH BACKEND SERVER
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'vue-project', 'dist', 'index.html')); // Serve Vue.js app entry point
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});