// Load the full build.
import _ from 'lodash';

var deck = [];
var CardsFolders = ["Clubs", "Diamonds", "Hearts", "Spades"]; //C=Clubs  D=Diamonds H=Hearts S=Spades
var cardWeights = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

(function getDeck() {

  for (let y of CardsFolders) {
    for (let x of cardWeights) {
      var card = {
        Value: x,
        Suit: y
      };
      deck.push(card);
    }
  }
  deck = _.shuffle(deck);
  return deck;
}());

//console.log(deck);
function getCards() {
  var usr_cards = [];
  for (let i = 0; i <= 4; i++) {
    usr_cards.push(deck[i]);
    deck = _.pull(deck, deck[i]);
  }
  //console.log(deck.length+"\n -- NEW USER -- \n");

  usr_cards = _.sortBy(usr_cards, function(obj) {
    return _.indexOf(cardWeights, obj.Value);
  });
  //  console.log(usr_cards);
  return usr_cards;
}

function Player(name) {
  this.name = name;
  this.cards = getCards();
  this.ranktype = this.handsCheck();
  this.pot = "120";
}

Player.prototype.flush_check = function() {
  var flag = true;
  for (var i = 0; i < this.cards.length; i++) {
    if (this.cards[i].Suit !== this.cards[0].Suit) {
      //console.log("not flush");
      flag = false;
      return flag;
    }
  }
  if (flag = true)
    return true;

  }

Player.prototype.royal_flush = function() {
  var royal = ['10', 'J', 'Q', 'K', 'A'];
  var flag = true;

  for (var i = this.cards.length - 1; i >= 0; i--) {
    //console.log(this.cards[i].Value);

    if (flag == false) {
      //  console.log("No Royal,Sorry!");
      return false;
    }

    flag = false;
    for (var j = this.length - 1; j >= 0; j--) {

      if (this.cards[j].Value == royal[i]) {
        flag = true;

      }

    }

  }
  if (flag) {
    //  console.log("ROYAL");
    return true;
  }
}

Player.prototype.straightCheck = function() {

  //  var filteredArray = _.uniqBy(this.cards, function(x) {
  //  return x.Value;
  //  });
  var numSuit = _.uniqBy(this.cards, function(x) {
    return x.Suit;
  });
  //console.log(numSuit);
  var index = _.indexOf(cardWeights, this.cards[0].Value);
  var Straightflag = true;

  for (var i = 0; i < this.cards.length - 1; i++) {
    if (this.cards[i].Value != cardWeights[index]) {
      Straightflag = false;
      //console.log("no Straight");
      return "no Straight";
    }
    index++;
    //console.log(index);
  }
  if ((!Straightflag) && (numSuit.length == 5)) {
    return "straight flush";
  } else if (Straightflag = true)
    return "Straight";
  }

Player.prototype.pairsCheck = function() {
  ///inserting count property in the object
  var filteredArray = this.cards;
  for (var i = 0; i < filteredArray.length; i++) {
    filteredArray[i].cnt = 0;
  }

  for (var j = 0; j < filteredArray.length; j++) {
    for (var i = 0; i < filteredArray.length; i++) {
      if (filteredArray[j].Value == filteredArray[i].Value)
        filteredArray[j].cnt = filteredArray[j].cnt + 1;

      }

  }

  filteredArray = _.uniqBy(filteredArray, function(x) {
    return x.Value;
  })

  this.cards = filteredArray;

  //console.log(this.cards);

  var max = _.maxBy(this.cards, function(o) {
    return o.cnt;
  });
  //console.log("MAX");
  //  console.log(max);

  var msg = "";
  if (this.cards.length == 4) {
    //console.log("exo 1 pair");
    msg = "1 pair of " + max.Value + " ";
    return msg;
  }
  if (this.cards.length == 3 && max.cnt) {
    msg = "2 pairs ";
    return msg;
  }
  if (this.cards.length == 3 && max.cnt == 3) {
    //console.log("three of a kind");
    msg = "3 of a kind of " + max.Value + " ";
    return msg;
  }
  if (this.cards.length == 2 && max.cnt == 3) {
    //console.log("Full House");
    msg = "Full House of " + max.Value + " ";
    return msg;
  }
  if (this.cards.length == 2 && max.cnt == 4) {
    //console.log("four of kind");
    msg = "four of kind of " + max.Value + " ";
    return msg;
  }

}

Player.prototype.handsCheck = function() {
var state=this.royal_flush();
this.
  if (state= true)
    return "Royal flush";
  else if (this.flush_check() == true)
    return "Flush";
  else if (this.straightCheck() == true)
    return this.straightCheck();
    //else if(this.pairsCheck()==true)
    //  return this.pairsCheck();
    //else
    //  return "high cards";

  }

var plr1 = new Player("Mike");
//var plr2 = new Player("Niko");

console.log(plr1)
