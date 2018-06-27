// Load the full build.
import _ from 'lodash';

var CardsFolders=["Clubs","Diamonds","Hearts","Spades"]; //C=Clubs  D=Diamonds H=Hearts S=Spades
var cardWeights = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


const HANDRANKING = [
  {category: 'Royal Flush'},
  {category: 'Straight Flush' },
  {category: 'Four of a Kind' },
  {category: 'Full House'},
  {category: 'Flush'},
  {category: 'Straight'},
  {category: 'Three of a Kind'},
  {category: 'Two Pair'},
  {category: 'Pair'},
  {category: 'High Card'},
];

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < CardsFolders.length; i++)
	{
		for(var x = 0; x < cardWeights.length; x++)
		{
			var card = {Value: cardWeights[x], Suit: CardsFolders[i]};
			deck.push(card);

		}
	}
  deck= _.shuffle(deck);
	return deck;
}

  var de=getDeck();


  class User{
      getCards(){
        const usr_cards=[];
        for(let i=0; i<=4; i++){
            usr_cards.push(de[i]);
          de=_.pull(de,de[i]);
                                }
      console.log(de.length+"\n -- NEW USER -- \n");
      return usr_cards;
              }

                  };


    var usr1=new User();
    var usr1_cards=usr1.getCards();
        console.log(usr1_cards);

Array.prototype.flush_check = function() {
  for(var i = 0; i < this.length; i++)
            {
        if(this[i].Suit !== this[0].Suit)
              return "Not Flush";
              }

                                        }
