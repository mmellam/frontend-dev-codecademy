const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Paula',
        lastName: 'Santi',
        age: 17
      },
      {
        firstName: 'Lora',
        lastName: 'Tiz',
        age: 16
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Nachos',
        teamPoints: 22,
        opponentPoints: 63
      },
      {
        opponent: 'Waldos',
        teamPoints: 420,
        opponentPoints: 2
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Willis', 34, 67);
  
  console.log(team);
  