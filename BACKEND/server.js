const express = require('express');
const { fetcher, formatBase, formatCurrencies, currencySelector } = require('./utils');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 
app.get('/api/rates', async (req, res) =>{
    const { base, currency } = req.query; 
    
    if(!base) return res.status(400).json("provide a base in ur query");
    if(!currency) return res.status(400).json("provide a currency in ur query");
    if(!formatBase(base)) res.status(400).json("the base provided is not supported by this api");
    if(!formatCurrencies(currency)) res.status(400).json("one or more of the provided currency is not supported by this api");
    
    let ApiResult

    try {
        const data = await fetcher(base)
        ApiResult = data;
    } catch (error) {
        res.status(500).json("server error, try again")
    }

    currencySelector(ApiResult.data.rates, currency)
    const results = {
        base: ApiResult.data.base,
        date: ApiResult.data.date,
        rates: ApiResult.data.rates
    }

  res.json({results})
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))