"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Input Mutation
function augmentClientDataTs(client) {
    if (client.name.lastname && client.name.firstname) {
        if (!client.lastUpdated) {
            client.lastUpdated = "2020-11-01";
        }
    }
}
