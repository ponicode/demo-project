# Primitive arguments
def calculate_commission_py(volume):
    fee = 0.0
    bonus = 0.0

    if (volume > 200000):
        rate = 0.15
        bonus = 1000
    else:
        if volume > 100000:
            rate = 0.123
        else:
            if volume > 50000:
                rate = 0.1
            else:
                if volume > 10000:
                    rate = 0.075
                else:
                    if volume > 5000:
                        rate = 0.05
                    else:
                        if volume > 0:
                            rate = 0.025
                        else:
                            rate = 0
                            fee = 50.0
    commission = int(volume * rate * 100) / 100.0
    award = commission + bonus - fee
    return award

# Structured arguments
def get_client_age_generation_py(client):
    res = {}
    res['gen'] = None
    res['set'] = True
    
    if client['age'] <= 18:
        res['gen'] = "Gen.Z"
    elif client.get("age") > 18 and client["age"] < 34:
        res['gen'] = "Gen.Y"
    elif client["age"] >= 34:
        res['gen'] = "Gen.X"
    else:
        res['set'] = False
    return res


# Structured arguments with deep nesting
def get_client_score_py(client):
    if (client.get('name')['firstname'] is not None) and (client['name']['lastname'] is not None):
        total_compliant_volume = 0
        dates = []
        for i in range(len(client["orders"])):
            if client["orders"][i]["order_id"] != -1 and client["orders"][i]["currency"] == "EUR":
                dates.append(client["orders"][i]["date"])
                total_compliant_volume += client["orders"][i]["volume"]
        return total_compliant_volume / len(dates)
    else:
        return 0


#Regex Inferer
import re
def isEmailValidPy(email):
    result = re.search(r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$", email)
    return bool(result)
    
get_client_age_generation_py({'age': 12})