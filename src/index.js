module.exports = function toReadable(number) {

    function transform(strSymbol) {
        if (strSymbol === '0') { return 'zero';}
        if (strSymbol === '1') { return 'one'; }
        if (strSymbol === '2') { return 'two'; }
        if (strSymbol === '3') { return 'three';}
        if (strSymbol === '4') { return 'four';}  
        if (strSymbol === '5') { return 'five'; }
        if (strSymbol === '6') { return 'six'; }
        if (strSymbol === '7') { return 'seven'; }
        if (strSymbol === '8') { return 'eight';}
        if (strSymbol === '9') { return 'nine';}  
        if (strSymbol === '10') { return 'ten';}
        if (strSymbol === '11') { return 'eleven'; }
        if (strSymbol === '12') { return 'twelve'; }
        if (strSymbol === '13') { return 'thirteen';}
        if (strSymbol === '14') { return 'fourteen';} 
        if (strSymbol === '15') { return 'fifteen';}  
        if (strSymbol === '16') { return 'sixteen';}  
        if (strSymbol === '17') { return 'seventeen';}  
        if (strSymbol === '18') { return 'eighteen';}
        if (strSymbol === '19') { return 'nineteen';}  
        if (strSymbol === '20') { return 'twenty';} 
        if (strSymbol === '30') { return 'thirty';}  
        if (strSymbol === '40') { return 'forty';}  
        if (strSymbol === '50') { return 'fifty';}  
        if (strSymbol === '60') { return 'sixty';}
        if (strSymbol === '70') { return 'seventy';}  
        if (strSymbol === '80') { return 'eighty';}  
        if (strSymbol === '90') { return 'ninety';}  

    }

    let strNumber = number.toString(); // '123'
    let strResult = '';

    if (strNumber.length === 1) {
        strResult = transform(strNumber); //0-9
    }

    if (strNumber.length === 2) {
        if (strNumber[1] === '0') {
            strResult = transform(strNumber[0] + '0');
        }
        else if(strNumber[0] === '1'){
            strResult = transform(strNumber);
        }
        else {
            strResult = transform(strNumber[0] + '0') + ' ' + transform(strNumber[1]);
        }
    }

    if (strNumber.length === 3) {
        if (strNumber[1] === '0' && strNumber[2] === '0') {
            strResult = transform(strNumber[0]) + ' hundred';
        }
        else if (strNumber[1] === '0') {
            strResult = transform(strNumber[0]) + ' hundred ' + transform(strNumber[2]);
        }
        else if (strNumber[2] === '0') {
            strResult = transform(strNumber[0]) + ' hundred ' + transform(strNumber[1] + strNumber[2]);
        }
        else if (strNumber[1] === '1') {
            strResult = transform(strNumber[0]) + ' hundred ' + transform(strNumber[1] + strNumber[2]);

        }   
        else {
            strResult = transform(strNumber[0]) + ' hundred ' + transform(strNumber[1] + '0')
                + ' ' + transform(strNumber[2]);
        }      
    }

    return strResult;
}
