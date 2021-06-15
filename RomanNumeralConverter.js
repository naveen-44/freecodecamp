var one = 'I';
var five = 'V';
var ten = 'X';
var fifty = 'L';
var hundred = 'C';
var fiveHundred = 'D';
var thousand = 'M';

function convertToRoman(num) {

  function repeatString(s,n){
    var result = '';
    while(n>0){
      result+=s;
      n--;
    }
    return result;
  }

  function returnRoman(digit,i){
    if (i==0){
      if (digit == 0)return '';
      if (digit <  4)return repeatString(one,digit);
      if (digit == 4)return one+five;
      if (digit <  9)return five+repeatString(one,digit-5);
      return one+ten;
    }

    if (i==1){
      if (digit == 0)return '';
      if (digit <  4)return repeatString(ten,digit);
      if (digit == 4)return ten+fifty;
      if (digit <  9)return fifty+repeatString(ten,digit-5);
      return ten+hundred;
    }

    if (i==2){
      if (digit == 0)return '';
      if (digit <  4)return repeatString(hundred,digit);
      if (digit == 4)return hundred+fiveHundred;
      if (digit <  9)return fiveHundred+repeatString(hundred,digit-5);
      return hundred+thousand;
    }

    if (i==3)
      if (digit <  4)return repeatString(thousand,digit);

  }

  var numDigits = [];

  while(num>0){
    numDigits.push(num%10);
    num/=10;
    num = Math.floor(num)
  }
  var solution = '';
  var r = '';
  for (var i=0;i<numDigits.length;i++){
    r = returnRoman(numDigits[i],i);
    solution = r + solution;
  }
 return solution;
}

convertToRoman(501);
