//https://stripe.com/docs/api?lang=python
import 'dotenv/config';
// import axios from 'axios';

//https://api.stripe.com
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
async function teste() {
  try{
    // const payout = await stripe.payouts.create({
    // amount: 1100,
    //   currency: 'usd',
    // });
    const session = await stripe.checkout.sessions.create({
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
      success_url: 'http://localhost:4242/success',
      cancel_url: 'http://localhost:4242/cancel',
    });
    console.log(session);
  }catch(err){
    console.log(err);
  }
}

teste();