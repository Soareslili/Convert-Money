const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueCoverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == 'dolar') {
        currencyValueCoverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueCoverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)


}
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    
    if(currencySelect.value =='dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.scr = './assets/USD.png'
    } 

    if(currencySelect.value =='euro'){
        currencyName.innerHTML = 'euro'
        currencyImage.scr ='./assets/euro.png'
    } 
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)