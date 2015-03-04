var Thermostat = function(){
   this.temperature = 20;
   this.powerSaver = true;
   this.MINTEMP = 10;
   this.maxTemp = 32;
};

Thermostat.prototype.increase = function(){
  if(this.temperature < this.maxTemp){
  return this.temperature += 1}
  else{
    return this.temperature
  };
};

Thermostat.prototype.decrease = function(){
  if(this.temperature > this.MINTEMP){
    return this.temperature -= 1 }
    else{
      return this.temperature
    };
};



Thermostat.prototype.resetter = function(){
  return this.temperature = 20;
};

Thermostat.prototype.powerSwitch = function (){
  this.powerSaver = (this.powerSaver ? false : true);
};












// Thermostat.prototype.controller = function(){
//   if (this.powerSaver && this.temperature > 25){
//     throw Error("Too hot with PS on")
//   }
//   else if (this.temperature < 11) {
//     throw Error("Too cold, there is schneefloeckchen on the window")
//   }
//   else if( this.temperature > 31){
//     throw Error("This is too hot.")
//   };
// };