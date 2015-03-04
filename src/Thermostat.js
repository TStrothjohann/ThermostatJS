var Thermostat = function(){
   this.temperature = 20;
};

Thermostat.prototype.increase = function(){
  this.controller();
  return this.temperature += 1;
};

Thermostat.prototype.decrease = function(){
  this.controller();
  return this.temperature -= 1;
};

Thermostat.prototype.controller = function(){
  if (this.temperature < 10) {
    throw Error("Too cold, there is schneefloeckchen on the window")
  }
  else if( this.temperature > 32){
    throw Error("This is too hot.")
  };
};