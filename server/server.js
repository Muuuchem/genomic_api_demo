import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import getAuthorization from './endpoints/api_endpoints';
var cors = require('cors');

// use it before all route definitions


const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
const middlewareConfig = mid => {
  mid.use(morgan('dev'));
  mid.use(bodyParser.json());
  mid.use(bodyParser.urlencoded({
    extended: true
  }));
};

middlewareConfig(app);

//routes below

const cb = (req, res) => {
  // var json = JSON.parse(res.body);
  // console.log("Access Token:", json.access_token);
  console.log("CALLLBACKLSDNFINEFL:KSENKLSEN");
};



app.get('/callback', cb);
app.get('/test', getAuthorization);
// app.get('https://genomicexplorer.io/oauth/authorize?redirect_uri=http://localhost:5000/callback&client_id=ACkyELWzOItMLBaG6qsJ9Ew7z4uTKa9EJw6kNuWq&response_type=code&scope=report:eye-color');
// app.post('https://genomicexplorer.io/oauth/token?client_id=ACkyELWzOItMLBaG6qsJ9Ew7z4uTKa9EJw6kNuWq&client_secret=9VOfeIEWrYfw1OlZHLrJBfpaqRTUeJQD5DLIpNXFupa1TFx8srIZAEk9DcEvOPaeLXGpHajDC27i92rWwHvd8OewrcRv2Fl1dYwpwa9x8G0ojRnlMKfwNUsstCUA8Tni&grant_type=authorization_code&code=BomKSpePB7gFuSpOZ8Ordix2hOoyv1&redirect_uri=http://127.0.0.1:5000/callback&scope=report:eye-color', cb);


const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
