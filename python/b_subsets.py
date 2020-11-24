import datetime

# Input Mutation
def augment_client_data_py(client):
    if (client.get("name").get('lastname') and client.get("name").get('firstname')):
        if not (client.get('last_updated')):
            client['last_updated'] = datetime.datetime.strptime("2020-11-01", "%Y-%m-%d")