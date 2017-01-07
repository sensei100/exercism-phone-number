var PhoneNumber = function(phone, number) {
  this.phone = phone;
  this.number = function(number) {
    this.number = this.number.replace(/[^\d]/g, ''); 
  }
}




module.exports = PhoneNumber;