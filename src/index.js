module.exports = function toReadable (number) {

  return humanReadable(number);
}

function humanReadable(num){
    var output = '';
    var numToTen = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var numDec = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var numToTwenty = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (num == 0){
    output = 'zero';
    }
    else if (num <= 10){
      output = numToTen[num];
    }
    else if (num < 100){
        if(num <20 && num > 10){
            output = numToTwenty[num%10];
        }
        else{
            output = numDec[(num - (num%10))/10] + ' ' + numToTen[(num%10)];
        }
    }
    else if (num<1000){
      output = numToTen[((num - (num%100))/100)] + ' hundred ';
      if ( (num%1000)%100 < 20 && (num%1000)%100 > 10)
      {
        output += numToTwenty[(num%100)%10];
      }
      else {
        output += (numDec[((num%100) - ((num%100)%10))/10] + ' '+ numToTen[((num%100)%10)]).trim();
      }
    }
   /* else if (num<10000){
      output =  numToTen[((num - (num%1000))/1000)] +' thousand ' + numToTen[(num%1000 - ((num%1000)/100))] + ' hundred ' + numDec[(((num%1000)%100) - ((num%1000)%100)%10)/10] + ' '+ numToTen[(((num%1000)%100)%10)];
    }*/
    return   output.trim();
}
