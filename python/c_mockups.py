import urllib
from z_utils import get_request

URL = "https://api.exchangeratesapi.io/{date}?base={curr}&symbols={symbols}"

# API request mockup
# For the following arguments set ("2020-11-01", "EUR", "USD,JPY")
# The response should be
# {"rates":{"JPY":122.36,"USD":1.1698},"base":"EUR","date":"2020-10-30"}

def get_currency_rate_from_urllib(date, base_currency, currencies):
    rates = urllib.urlopen(
        URL.format(
            date=date, 
            curr=base_currency, 
            symbols=currencies
        )
    ).read()
    return rates

def get_currency_rate_from_custom(date, base_currency, currencies):
    rates = get_request(url=URL.format(date=date, curr=base_currency, symbols=currencies))
    return rates

if __name__ == "__main__":
    print(get_currency_rate("2020-11-01", "EUR", "USD,JPY"))