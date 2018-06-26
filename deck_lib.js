// Load the full build.
import _ from 'lodash';

var CardsFolders=["C","D","H","S"]; //C=Clubs  D=Diamonds H=Hearts S=Spades
var cardWeights = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cards=[];
CardsFolders.forEach(function(element) {
    cardWeights.forEach(function(element1){
      cards.push(element+element1);
    })

});
cards= _.shuffle(cards);
console.log("shuffled cards \n"+ cards+" ");



class User{

    getCards(){
      const usr_cards=[];
      for(let i=0; i<=4; i++){
          usr_cards.push(cards[i]);
          cards=_.pull(cards,cards[i]);
                              }
    console.log(cards.length+"\n -- NEW USER -- \n"+usr_cards);
    return usr_cards;
            }

                };

var usr1=new User();
var usr1_cards=usr1.getCards();
var usr2=new User();
var usr2_cards=usr2.getCards();
  suits(usr1_cards);
  suits(usr2_cards);
   

                            function suits(obj){
                              let s_suit=0,suitC=0,suitD=0,suitH=0,suitS=0;
                                    obj.forEach(function(element){
                                            if (element.charAt(0)=='D'){
                                       suitD++;}
                                       else if (element.charAt(0)=='C'){
                                       suitC++;}
                                       else if (element.charAt(0)=='H'){
                                       suitH++;}
                                      else{
                                       suitS++;}

                                                                  });

                                        s_suit=[suitC,suitD,suitH,suitS];

                                        if (Math.max(...s_suit)==5) {
                                                console.log("flush");
                                                if (r_flush()){
                                                  return "royal flush";
                                                }


                                                if (s_flush()){
                                                  return "Straight flush";
                                                }
                                                                    }


                                              return s_suit;

                                              }
