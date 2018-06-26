// Load the full build.
import _ from 'lodash';

      var arr=[{Value:'10',Suit:'Hearts'},{Value:'A',Suit:'Hearts'},{Value:'10',Suit:'Hearts'},{Value:'12',Suit:'Hearts'},{Value:'4',Suit:'Clubs'}];
      var order = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


      var sorted_arr = _.sortBy(arr, function(obj){
            return _.indexOf(order, obj.Value);
                                                  });

                //console.log(sorted_arr);

                    for(var i=0; i<arr.length; i++){
                            sorted_arr[i].cnt=0;
                                                  }

      var  filteredArray=sorted_arr;

      filteredArray.forEach(function(element){
        for(var i=0; i<sorted_arr.length; i++){
            if (element.Value==sorted_arr[i].Value)
                element.cnt=element.cnt+1;

        }
          //  console.log(element);

      });


      var filteredArray = _.uniqBy(sorted_arr,function(x){ return x.Value  ;});
      //console.log("\nUNIQUE VALUES\n");
      console.log(filteredArray);

      if(filteredArray.length==4 )
      console.log("exo 1 pair");
      if(filteredArray.length==3)
      console.log("exo three of a kind");
      if(filteredArray.length==2 && !(filteredArray[0].cnt==3 ||filteredArray[1].cnt==2) )
      console.log("three of a kind and a pair")
      if(filteredArray.length==2 && !(filteredArray[0].cnt==4 ||filteredArray[1].cnt==4) )
      console.log("2 pairs");
      if(filteredArray.length==2 && (filteredArray[0].cnt==4 ||filteredArray[1].cnt==4))
      console.log("four of kind");





/*

          console.log(filteredArray);
          console.log("look");
          var max=_.maxBy(filteredArray, function(o) { return o.cnt; });
          console.log(max.cnt);



        Array.prototype.straight_flush= function(){

        var sorted = filteredArray;
        var flag=true;


        for (var i = 0; i < sorted.length; i++) {

        if (!order.includes(sorted[i].Value) || sorted[i].cnt>1)
        {
        //console.log(sorted[i].cnt);
        flag=false;
        }
        //console.log(order.includes(sorted[i].key));

        }
        if (flag==false){
        console.log("no straight");
        }
        else {
        console.log("pairs found");
        }
      }

        var kati= filteredArray.straight_flush();
*/
