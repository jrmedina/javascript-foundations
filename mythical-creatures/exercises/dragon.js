
class Dragon {
  constructor(name, rider){
  this.name = name;
  this.rider = rider;
  this.hungry = true
  this.meals = []
  }
  greet(){
  return `Hi, ${this.rider}!`
  }
  eat(){
this.meals ++
if (this.meals >= 3) {
  this.hungry = false
  }
}

}















module.exports = Dragon;
