class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined){
      this.color = 'white'
    } else {
    this.color = color //|| 'white'
    // Using the || op is another way of setting a default
    }
  }
  isWhite(){
    if (this.color !== 'white') {
    return false;
    }
  }
  says(message){
    return (`**;* ${message} *;**`)
  }
}


module.exports = Unicorn;


// Read the test
// Ask ourself is it going to fail / why?
// Run the test
// Make it pass
