import { ClientUpdate } from "./b_basics.d";

// Input Mutation
function augmentClientDataTs(client: ClientUpdate){
    if (client.name.lastname && client.name.firstname){
        if (!client.lastUpdated){
            client.lastUpdated = "2020-11-01"
        }
    }
}