import _ from 'lodash';

      var arr=[{Value:'J',Suit:'Hearts'},{Value:'10',Suit:'Hearts'},{Value:'8',Suit:'Hearts'},{Value:'7',Suit:'Hearts'},{Value:'9',Suit:'Clubs'}];
      var order = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


      var arr = _.sortBy(arr, function(obj){
            return _.indexOf(order, obj.Value);
                                                  });
              //  console.log(arr);


                var index= _.indexOf(order,arr[0].Value);
              //  console.log(index);


    Array.prototype.StraightCheck= function(){
        var Straightflag=true;
          for(var i=0; i<arr.length-1; i++){
                if(arr[i].Value!=order[index]){
                  Straightflag=false;
                  return "no Straight";
                                                }
              index++;
              //console.log(index);
                                          }
                if (Straightflag=true)
                return "Straight";
                                            }

  var result= arr.StraightCheck();
  console.log(result);
