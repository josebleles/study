//https://docs.adyen.com/online-payments/get-started
import 'dotenv/config';
import axios from 'axios';

const url = 'https://checkout-test.adyen.com/v70/payments';
const apiKey = process.env.ADYEN_API_KEY;
const merchantAccount = process.env.ADYEN_MERCHANT_ACCOUNT_NAME;

const requestData = {
  merchantAccount: merchantAccount,
  reference: 'aaaas',
  amount: {
    value: 1000,
    currency: 'EUR'
  },
  paymentMethod: {
    type: 'scheme',
    encryptedCardNumber: 'a',
    encryptedExpiryMonth: 'test_03',
    encryptedExpiryYear: 'test_2030',
    encryptedSecurityCode: 'test_737'
  }
};
async function teste() {
    try{
        let teste = await axios.post(url, requestData, {
        headers: {
            'x-api-key': apiKey,
            'content-type': 'application/json'
        }});
        console.log(teste.data)
    }catch(err){
        console.log(err);
    }
}
teste();
