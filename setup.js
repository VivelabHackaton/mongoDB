let res = [
	db.createUser({
		user: 'admin',
		pwd: 'votaciones2018.',
		roles: [
			{role: 'dbOwner', db: 'votaciones'}
		]
	})
]