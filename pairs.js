// Load the full build.
import _ from 'lodash';

      var arr=[{Value:'10',Suit:'Hearts'},{Value:'10',Suit:'Hearts'},{Value:'10',Suit:'Hearts'},{Value:'A',Suit:'Hearts'},{Value:'A',Suit:'Clubs'}];
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
      var max=_.maxBy(filteredArray, function(o) { return o.cnt; });
      //console.log(max.cnt);


      if(filteredArray.length==4 )
      console.log("exo 1 pair");
      if(filteredArray.length==3 && max.cnt==2)
      console.log("exo 2 pairs");
      if(filteredArray.length==3 && max.cnt==3 )
      console.log("three of a kind")
      if(filteredArray.length==2 && max.cnt==3 )
      console.log("three of a kind and a pair")
      if(filteredArray.length==2 && max.cnt==4 )
      console.log("four of kind");
