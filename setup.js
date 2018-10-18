let res = [
  db.createUser({
    user: 'admin',
    pwd: 'votaciones2018.',
    roles: [
      {role: 'dbOwner', db: 'votaciones'}
    ]
  }),
  db.createCollection('usersCollection'),
  db.usersCollection.insert([
    {
      "name" : "Jonathan Ortiz",
      "id" : "10145367895",
      "email" : 'joaortizro@unal.edu.co',
      "password": "$2y$10$1hW.lLrxdvhQzsvf5OWPrOL64y4HARaok/.D5Ok3II3nmFVqo/gxC",
      "hasVoted" : false,
      "isCandidate" : true,
      "imagePath" : ""
    },
    {
      "name" : "Anni Piragauta",
      "id" : "1034546789",
      "email" : 'annilok@unal.edu.co',
      "password": "$2y$10$J/glPlCbr5WIqAZv.jTBoeVYOlRUvQibbrWEgGy5wp1X9d/Qg2aHC",
      "hasVoted" : false,
      "isCandidate" : true,
      "imagePath" : ""
    },
    {
      "name" : "Blanco",
      "id" : "0",
      "email" : 'walter@white.com',
      "isCandidate" : true
    },
    {
      "name" : "UserTest",
      "id" : "666",
      "email" : 'test@unal.edu.co',
      "password": "$2y$10$iIR9ulDDy7DCeABOGXwKWuHFrKFT3bMTl09.RDj7bXiOWBXIYu472",
      "hasVoted" : false,
      "isCandidate" : false
    }
  ])
]
