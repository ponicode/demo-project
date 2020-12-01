// Input Mutation
function augmentClientDataJs(client){
  if (client.name.lastname && client.name.firstname){
      if (!('lastUpdated' in client)){
          client.lastUpdated = "2020-11-01"
      }
  }
}