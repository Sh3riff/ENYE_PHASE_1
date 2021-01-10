const axios = require('axios');

const fetcher = async (base) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
};

const supportedCurrencies = ["EUR", "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "AUD", "RON", "SEK", "IDR", "INR","BRL" , "RUB", "HRK", "JPY", "THB", "CHF", "SGD", "PLN", "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "ILS", "GBP", "KRW", "MYR"]

const formatBase = base => {
    let upperCasedBase = base.toUpperCase()
    if(supportedCurrencies.includes(upperCasedBase)) return true;
    return false
}

const formatCurrencies = currencies => {
    let listOfCurrencies = currencies.split(",")
    let newList =[]
    let valueToReturn
    listOfCurrencies.map(currency => {
        let upperCasedCurrency = currency.toUpperCase();
        newList.push(upperCasedCurrency)
    })
    newList.forEach(currency => {
        if(!supportedCurrencies.includes(currency)) return valueToReturn = false;
        return valueToReturn = true;
    })
    return valueToReturn;
}

const currencySelector = (allCurrencies, passedCurrencies) => {
    const filterObject = (obj, arr) => {
        Object.keys(obj).forEach(key => {
            if(!arr.includes(key)){
                delete obj[key];
            };
        });
    };   
    filterObject(allCurrencies, passedCurrencies)
}


module.exports = {
    fetcher,
    formatBase,
    formatCurrencies,
    currencySelector
}