import { Client, ClientGen, GenResult } from "./a_basics.d";

// Primitive arguments
function calculateCommissionTs(volume: number) {
    var fee: number = 0.0;
    var rate: number;
    var commission: number;
    var bonus: number = 0.0;
    var award: number;

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
function getClientAgeGenerationTs(client: ClientGen): GenResult {
    var res: GenResult = {
      gen: null,
      set: true
    };

    if (client.age <= 18){
        res.gen = "Gen.Z"
    } else if (client.age > 18 && client.age < 34){
        res.gen = "Gen.Y"
    } else if (client.age >= 34){
        res.gen = "Gen.X"
    } else {
        res.set = false
    }
    return res;
}


// Structured arguments with deep nesting
function getClientScoreTs(client: Client){
    if (client.name.firstname && client.name.lastname){
        var total_volume: number = 0;
        var dates: Array<String> = [];
        for (let i:number = 0; i < client.orders.length; i++){
            if (client.orders[i].order_id != "-1" && client.orders[i].currency === "EUR"){
                dates.push(client.orders[i].date)
                total_volume += client.orders[i].volume
            }
        }
        return total_volume / dates.length
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