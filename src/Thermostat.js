var Thermostat = function(){
   this.temperature = 20;
   this.powerSaver = true;
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
  if (this.powerSaver && this.temperature > 25){
    throw Error("Too hot with PS on")
  }
  else if (this.temperature < 10) {
    throw Error("Too cold, there is schneefloeckchen on the window")
  }
  else if( this.temperature > 32){
    throw Error("This is too hot.")
  };
};

Thermostat.prototype.resetter = function(){
  return this.temperature = 20;
};

Thermostat.prototype.powerSwitch = function (){
  this.powerSaver = false;
  if (this.temperature > 25){
    this.resetter();
  }
};

