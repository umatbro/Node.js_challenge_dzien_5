const express = require('express');
const app = express();

let votesYes = 0;
let votesNo = 0;
let votesMaybe = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:vote', (req, res) => {
  let vote = req.params.vote;
  let msg = 'Thank you for your vote!';
  switch(vote) {
    case 'yes':
      ++votesYes;
      break;
    case 'no':
      ++votesNo;
      break;
    case 'maybe':
      ++votesMaybe;
      break;
   default:
    msg = 'Invalid vote';
  }
  res.send(msg);
});

app.get('/votes/check', (req, res) =>  {
  let resp = `Yes: ${votesYes}<br/>No: ${votesNo}<br/>Maybe: ${votesMaybe}`;
  res.send(resp);
});

app.listen(3000, ()=>{
  console.log('Server listening on 3000');
})
