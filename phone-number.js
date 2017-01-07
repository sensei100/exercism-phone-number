var PhoneNumber = function(phone, number) {
  this.phone = phone;
  this.number = function(number) {
    var formattedNumber = this.phone.replace(/[^\d]+/g,'');
    if(formattedNumber.length != 10){
            if(formattedNumber.length == 11 && formattedNumber[0] == '1' && formattedNumber[1] == '1'){
                return formattedNumber.substring(1,formattedNumber.length);
            } else {
                return "0000000000"
              }
        }
        
        return phone.replace(/[^\d]+/g,''); 
  }

  this.areaCode = function() {
    return phone.substring(0,3);
  }
  this.toString = function() {
    return "("+this.areaCode()+")"+" "+phone.substring(3,6)+"-"+phone.substring(6,10);
  }
}


module.exports = PhoneNumber;