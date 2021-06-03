const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51IB6aFBCV55mFhVNPnDzP8J0CF6gfUH2Nx1xpLlLq1Nus36dbpWKC8YcnorwuwjEARVNVrQelN2AjvNWEqtYo4zz00W5JylXF0')
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors())
//json hantera
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/create-checkout-session', async (req, res) => {


    console.log("req body" , req.body)
    // name och price 
    // req.body 


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  }); 
  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));