import { Client, ClientGen } from "./a_basics.d";

// Primitive arguments
function calculateCommissionTs(volume:number) {
    var fee:number;
    var rate:number; 
    var commission:number; 
    var bonus:number;
    var award:number;
    fee = 0.0;
    bonus = 0.0;
    if (volume > 200000.0) {
      rate = 0.15;
      bonus = 1000.0;
    } else {
      if (volume > 100000.0) rate = 0.123;
      else {
        if (volume > 50000.0) rate = 0.1;
        else {
          if (volume >= 10000.0) rate = 0.075;
          else {
            if (volume >= 5000.0) rate = 0.05;
            else {
              if (volume > 0.0) rate = 0.025;
              else {
                rate = 0;
                fee = 50.0;
              }
            }
          }
        }
      }
    }
    commission = Math.trunc(volume * rate * 100) / 100;
    award = commission + bonus - fee;
    return Math.trunc(award * 100) / 100;
}

// Structured arguments
function getClientAgeGenerationTs(client: ClientGen){
    if (client.age <= 18){
        return "Gen.Z"
    } else if (client.age > 18 && client.age < 34){
        return "Gen.Y"
    } else if (client.age >= 34){
        return "Gen.X"
    } else {
        return null
    }
}


// Structured arguments with deep nesting
function getClientScoreTs(client: Client){
    if (client.name.firstname && client.name.lastname){
        var amount_spend: number = 0;
        var dates: Array<String> = [];
        for (let i:number = 0; i < client.orders.length; i++){
            if (client.orders[i].order_id != "-1" && client.orders[i].currency === "EUR"){
                dates.push(client.orders[i].date)
                amount_spend += client.orders[i].price
            }
        }
        return amount_spend / dates.length
    } else {
        return 0
    }
}

// Regex Inferer
function isEmailValidTs(email: string) {
    const unicodePattern = /[^\x00-\x7F]/;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !unicodePattern.test(email) && re.test(email.toLowerCase());
}