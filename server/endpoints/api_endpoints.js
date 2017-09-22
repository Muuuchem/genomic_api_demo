import axios from 'axios';
import fetch from 'node-fetch';
import jquery from 'jquery';

function getAuthorization(req, res) {
  console.log('somewhere');

    return axios.get("https://genomicexplorer.io/oauth/authorize?redirect_uri=http://127.0.0.1:5000/callback&client_id=ACkyELWzOItMLBaG6qsJ9Ew7z4uTKa9EJw6kNuWq&response_type=code&scope=report:eye-color",
    {
    method: 'GET',
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'Accept': 'application/x-www-form-urlencoded',
          //   'Content-Type': 'application/x-www-form-urlencoded',
          // },
          // mode: 'no-cors',
        }
  ).then((yep) => {
    console.log(yep.config.url);
    return res.send(yep.config.url);
    // req.send(req.data);
  }, (err) => {
    console.log(err);
  });

}

export default getAuthorization;
