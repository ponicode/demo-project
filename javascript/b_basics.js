// Input Mutation
function augmentClientDataJs(client){
  if (client.name.lastname && client.name.firstname){
      if (!client.lastUpdated){
          client.lastUpdated = "2020-11-01"
      }
  }
}