//https://stripe.com/docs/api?lang=python
import 'dotenv/config';
// import axios from 'axios';

//https://api.stripe.com
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
async function teste() {
  try{
    const payout = await stripe.payouts.create({
    amount: 1100,
      currency: 'usd',
    });
  }catch(err){
    console.log(err);
  }
}

teste();