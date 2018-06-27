import _ from 'lodash';

var order = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K","A"];
var arr=[{Value:'J',Suit:'Hearts'},{Value:'A',Suit:'Hearts'},{Value:'8',Suit:'Hearts'},{Value:'7',Suit:'Hearts'},{Value:'A',Suit:'Clubs'}];
var cardPoints=[2,3,4,5,6,7,8,9,10,11,12,13,14];
var arr1=[{Value:'K',Suit:'Hearts'},{Value:'K',Suit:'Hearts'},{Value:'8',Suit:'Hearts'},{Value:'A',Suit:'Hearts'},{Value:'7',Suit:'Clubs'}];



var sorted_arr = _.sortBy(arr, function(obj){
      return _.indexOf(order, obj.Value);
                                            });

var sorted_arr1 = _.sortBy(arr1, function(obj){
      return _.indexOf(order, obj.Value);
                                            });

            console.log(sorted_arr);
            console.log("  ");
            console.log(sorted_arr1);


function winnerCheck(obj1,obj2){
///comparing highcards
var pnts_ar;
var pnts_ar1;
for(var i=0; i<obj1.length-1; i++){
  ///se periptosi p exo pairs ipologizw mono tous tous podous apo ta pairs
    var index=_.indexOf(order, obj1[i].Value);
    var index1=_.indexOf(order, obj2[i].Value);
    //console.log(index);
    pnts_ar+=cardPoints[index];
    pnts_ar1+=cardPoints[index];
  }

  if (pnts_ar>pnts_ar1)
  console.log("player 1 wins");
  else {
    console.log("player 2 wins");
  }
}

winnerCheck(sorted_arr,sorted_arr1);
