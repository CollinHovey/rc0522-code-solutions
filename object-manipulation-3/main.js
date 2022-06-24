console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerList = [
  player1 = {
  name: 'Player 1',
  hand: [],
  handValue: 0
  },

  player2 = {
  name: 'Player 2',
  hand: [],
  handValue: 0
 },

  player3 = {
  name: 'Player 3',
  hand: [],
  handValue: 0
  },

  player4 = {
  name: 'Player 4',
  hand: [],
  handValue: 0
  }
]




var deck = [
  aceHeart = {
  rank: 'ace',
  suit: 'hearts'
  },

  twoHeart = {
  rank: 2,
  suit: 'hearts'
  },

  threeHeart = {
  rank: 3,
  suit: 'hearts'
  },

  fourHeart = {
  rank: 4,
  suit: 'hearts'
  },

  fiveHeart = {
  rank: 5,
  suit: 'hearts'
  },

  sixHeart = {
  rank: 6,
  suit: 'hearts'
  },

  sevenHeart = {
  rank: 7,
  suit: 'hearts'
  },

  eightHeart = {
  rank: 8,
  suit: 'hearts'
  },

  nineHeart = {
  rank: 9,
  suit: 'hearts'
  },

  tenHeart = {
  rank: 10,
  suit: 'hearts'
  },

  jackHeart = {
  rank: 'jack',
  suit: 'hearts'
  },

  queenHeart = {
  rank: 'queen',
  suit: 'hearts'
  },

  kingHeart = {
  rank: 'king',
  suit: 'hearts'
  },

  aceDiamond = {
  rank: 'ace',
  suit: 'diamonds'
  },

  twoDiamonds = {
  rank: 2,
  suit: 'diamonds'
  },

  threeDiamonds = {
  rank: 3,
  suit: 'diamonds'
  },

  fourDiamonds = {
  rank: 4,
  suit: 'diamonds'
  },

  fiveDiamonds = {
  rank: 5,
  suit: 'diamonds'
  },

  sixDiamonds = {
  rank: 6,
  suit: 'diamonds'
  },

  sevenDiamonds = {
  rank: 7,
  suit: 'diamonds'
  },

  eightDiamonds = {
  rank: 8,
  suit: 'diamonds'
  },

  nineDiamonds = {
  rank: 9,
  suit: 'diamonds'
  },

  tenDiamonds = {
  rank: 10,
  suit: 'diamonds'
  },

  jackDiamonds = {
  rank: 'jack',
  suit: 'diamonds'
  },

  queenDiamonds = {
  rank: 'queen',
  suit: 'diamonds'
  },

  kingDiamonds = {
  rank: 'king',
  suit: 'diamonds'
  },

  aceClubs = {
  rank: 'ace',
  suit: 'clubs'
  },

  twoClubs = {
  rank: 2,
  suit: 'clubs'
  },

  threeClubs = {
  rank: 3,
  suit: 'clubs'
  },

  fourClubs = {
  rank: 4,
  suit: 'clubs'
  },

  fiveClubs = {
  rank: 5,
  suit: 'clubs'
  },

  sixClubs = {
  rank: 6,
  suit: 'clubs'
  },

  sevenClubs = {
  rank: 7,
  suit: 'clubs'
  },

  eightClubs = {
  rank: 8,
  suit: 'clubs'
  },

  nineClubs = {
  rank: 9,
  suit: 'clubs'
  },

  tenClubs = {
  rank: 10,
  suit: 'clubs'
  },

  jackClubs = {
  rank: 'jack',
  suit: 'clubs'
  },

  queenClubs = {
  rank: 'queen',
  suit: 'clubs'
  },

  kingClubs = {
  rank: 'king',
  suit: 'clubs'
  },

  aceSpades = {
  rank: 'ace',
  suit: 'spades'
  },

  twoSpades = {
  rank: 2,
  suit: 'spades'
  },

  threeSpades = {
  rank: 3,
  suit: 'spades'
  },

  fourSpades = {
  rank: 4,
  suit: 'spades'
  },

  fiveSpades = {
  rank: 5,
  suit: 'spades'
  },

  sixSpades = {
  rank: 6,
  suit: 'spades'
  },

  sevenSpades = {
  rank: 7,
  suit: 'spades'
  },

  eightSpades = {
  rank: 8,
  suit: 'spades'
  },

  nineSpades = {
  rank: 9,
  suit: 'spades'
  },

  tenSpades = {
  rank: 10,
  suit: 'spades'
  },

  jackSpades = {
  rank: 'jack',
  suit: 'spades'
  },

  queenSpades = {
  rank: 'queen',
  suit: 'spades'
  },

  kingSpades = {
  rank: 'king',
  suit: 'spades'
  }
]

var deckCount = 0;

function shuffle() {
  deckCount = 0
  var randomIndex = 0;
  var newDeck = [];
  for (var x = 0; x < 52; x++) {
    randomIndex = Math.floor(Math.random() * deck.length);
    newDeck.push(deck.splice(randomIndex, 1)[0]);
  }
  deck = newDeck;
}

function deal(players) {
  for (var x = 0; x < players.length; x++) {
    players[x].hand.push(deck[deckCount]);
    deckCount += 1;
  };
}

function determinWinner(players) {
  for (var x = 0; x < players.length; x++) {
    var card1Value = 0;
    var card2Value = 0;
    if (players[x].hand[0].rank === 'ace') {
      card1Value = 11;
    } else if (players[x].hand[0].rank === 'jack' || players[x].hand[0].rank === 'queen' || players[x].hand[0].rank === 'king') {
      card1Value = 10;
    } else {
      card1Value = players[x].hand[0].rank;
    }
    if (players[x].hand[1].rank === 'ace') {
      card2Value = 11;
    } else if (players[x].hand[1].rank === 'jack' || players[x].hand[1].rank === 'queen' || players[x].hand[1].rank === 'king') {
      card2Value = 10;
    } else {
      card2Value = players[x].hand[1].rank;
    }
    players[x].handValue = card1Value + card2Value;
    console.log(players[x].name, 'Score:', players[x].handValue);
  }
  var topPlayer = [players[0]];
  for (var y = 1; y < players.length; y++) {
    if (topPlayer[0].handValue < players[y].handValue) {
      topPlayer = [players[y]];
    } else if (topPlayer[0].handValue === players[y].handValue) {
      topPlayer.push(players[y]);
    }
  }
  if (topPlayer.length === 1) {
    console.log('Winner: ', topPlayer[0].name, 'Score:', topPlayer[0].handValue);
  } else {
    for (var x = 0; x < topPlayer.length; x++) {
      topPlayer[x].hand = [];
      topPlayer[x].handValue = 0;
    }
    allPlayers = topPlayer;
    shuffle();
    deal(allPlayers);
    deal(allPlayers);
    determinWinner(allPlayers);
    resetPlayers();
  }

}

function resetPlayers() {
  playerList = [
    player1 = {
      name: 'Player 1',
      hand: [],
      handValue: 0
    },

    player2 = {
      name: 'Player 2',
      hand: [],
      handValue: 0
    },

    player3 = {
      name: 'Player 3',
      hand: [],
      handValue: 0
    },

    player4 = {
      name: 'Player 4',
      hand: [],
      handValue: 0
    }
  ]
}

function playGame(playerAmount) {
  var allPlayers = [];
  for (var x = 0; x < playerAmount; x++) {
    allPlayers.push(playerList[x]);
  }
  shuffle();
  deal(allPlayers);
  deal(allPlayers);
  determinWinner(allPlayers);
  resetPlayers();
}
