function convert(num) {
 //Convert to array 
 //Reverse array so bigger units are at end of array
 //e.g. 1's,10's,100's 
 var digits = num.toString().split('').reverse();
 
 for(var i = 0; i < digits.length; i++ ){
   var number = Number(digits[i]) * Math.pow(10,i);
   
   
   if (number <= 3) {
     number = Array(number + 1).join("I");     
   }
   else if (number == 4){
     number = "IV";
   }
   else if (number == 5){
     number = "V";
   }
   else if(number <= 8){
     number = "V" + Array(number - 4).join("I");
   }
   else if (number == 9){
     number = "IX";
   }
   
   
   
   
   else if (number <= 30){
     number = Array((number / 10) + 1).join("X");
   }
   else if (number == 40){
     number = "XL";
   }
   else if (number == 50){
     number = "L";
   }
   else if(number <= 80){
     number = "L" + Array((number - 40) / 10).join("X");
   }
   else if (number == 90){
     number = "XC";
   }
   else if (number <= 300) {
     number = Array((number / 100) + 1).join("C");     
   }
   else if (number == 400) {
     number = "CD";     
   }
   else if (number == 500) {
     number = "D";     
   }
   else if(number <= 800){
     number = "D" + Array((number - 400) / 100).join("C");
   }
   else if(number <= 900){
     number = "CM";
   }
   else if (number <= 3000) {
     number = Array((number / 1000) + 1).join("M");     
   }
   
   
   //console.log(number);
   
   digits[i] = number;
  
   
 } 
 //console.log(digits.reverse().join('')); 
 return digits.reverse().join(''); 
 
  
}

