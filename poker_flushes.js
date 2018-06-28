import _ from 'lodash';
Array.prototype.royal_flush = function() {
  var royal=['10','J','Q','K','A'];
  var flag=true;

    for(var i =this.length-1; i >= 0; i--)
    {

                        if (flag==false ) {
                          console.log("No Royal,Sorry!");
                          return false;
                        }


                        flag=false;
            for(var j = this.length-1; j >= 0; j--){

                  if (this[j].Value == royal[i]){
                      flag=true;

                                    }

                                                }

    }
    if (flag){
    console.log("ROYAL");
    return true;
              }
}

        ///// TEST ROYAL Flush
  var cardWeights = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K","A"];
  var r_flushTest=[{Value:'10',Suit:'Hearts'},{Value:'J',Suit:'Hearts'},{Value:'Q',Suit:'Hearts'},{Value:'K',Suit:'Hearts'},{Value:'10',Suit:'Hearts'}];
  var b1=r_flushTest.royal_flush();
  console.log(b1);





Array.prototype.straight_flush= function(){
  var arr = [{Value:'10',Suit:'Hearts'},{Value:'J',Suit:'Hearts'},{Value:'Q',Suit:'Hearts'},{Value:'A',Suit:'Hearts'},{Value:'A',Suit:'Hearts'}];
  var order =cardWeights;
  var sorted = _.sortBy(arr, function(obj){
        return _.indexOf(order, obj.Value);
  });

  var flag=true;
  var filteredArray = _.uniqBy(sorted,function(x){ return x.Value  ;});
  if(filteredArray.length==sorted.length){
      for (var i = 0; i < sorted.length; i++) {
      if (!order.includes(sorted[i].Value)) {
        flag=false;
      }
  //console.log(order.includes(sorted[i].key));

  }
          }
          else{
            flag=false;
              }

      if (flag==false){
        console.log("no straight_flush");
      }
      else {
        console.log("straight_flush found");
      }
                                        }

var kati= r_flushTest.straight_flush();
