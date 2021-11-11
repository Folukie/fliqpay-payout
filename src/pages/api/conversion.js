// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
}

//   https://api.exchangeratesapi.io/v1/latest

// ? access_key = YOUR_ACCESS_KEY
// & base = GBP
// & symbols = USD,AUD,CAD,PLN,MXN
