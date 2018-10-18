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
      "password": "asd321",
      "hasVoted" : false,
      "isCandidate" : true,
      "imagePath" : ""
    },
    {
      "name" : "Anni Piragauta",
      "id" : "1034546789",
      "email" : 'annilok@unal.edu.co',
      "password": "asd123",
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
      "password": "12345678",
      "hasVoted" : false,
      "isCandidate" : false
    }
  ])
]
