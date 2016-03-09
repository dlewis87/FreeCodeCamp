function drawer(price, cash, cid) {
  var change = cash - price;
  var changeArr = [];
  var cidObj = {};
  var changeObj = {};

  
  function calc(changeLeft, amountName, amount){
      while(change >= amount && cidObj[amountName] >= amount){
      change -= amount;
      cidObj[amountName] -= amount;
      changeObj[amountName] += amount;
    }
  }
  
  var totalCid = 0;
  for(var i = 0; i < cid.length; i++){
    totalCid += parseFloat(cid[i][1]);
  }  
  
  if(totalCid < change){
    return "Insufficient Funds";
  }
  else if(totalCid === change){
    return "Closed";
  }
  else{
  
    cid.map(function(v) {
      cidObj[v[0]] = v[1];
      changeObj[v[0]] = 0;
    });
      
  
  
    //Money values
    //Divide change into smallest possible
    //Check to see if change available
    //loop through change until no change left
    var count = 100;
    while(change > 0 && count > 0){
      calc(change, "ONE HUNDRED", 100);
      calc(change, "TWENTY", 20);
      calc(change, "TEN", 10);
      calc(change, "FIVE", 5);
      calc(change, "ONE", 1);
      calc(change, "QUARTER", 0.5);
      calc(change, "DIME", 0.1);
      calc(change, "NICKEL", 0.05);
      calc(change, "PENNY", 0.01);
      count--;
    }
    
    var changeLeft = [];
    for (var key in changeObj) {
      if (changeObj.hasOwnProperty(key) && changeObj[key] !== 0) {
        changeLeft.push([key,changeObj[key]]);
      }
      
    }
    
    
  
    console.log(changeLeft);
  
  
  
  
  
    // Here is your change, ma'am.
    return changeLeft;
    
  }
  
  
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
