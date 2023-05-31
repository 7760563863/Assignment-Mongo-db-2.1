Query for the player with the most touchdown passes:
db.players.find().sort({ touchdownsThrown: -1 }).limit(1);

Query for the player with the most rushing yards:
db.players.find().sort({ rushingYards: -1 }).limit(1);

Query for the player with the least rushing yards:
db.players.find().sort({ rushingYards: 1 }).limit(1);

Query for a list of players sorted from most to fewest field goals made:
db.players.find().sort({ fieldGoalsMade: -1 });

Query for the player with the most number of sacks:
db.players.find().sort({ sacks: -1 }).limit(1);
