var Thermostat = function(){
   this.temperature = 20;
   this.powerSaver = true;
   this.MINTEMP = 10;
   this.maxTemp = 26;
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
  if(this.powerSaver === true){
    this.powerSaver = false;
    this.maxTemp = 32;
  }else{
    this.powerSaver = true;
    this.maxTemp = 26;
    this.resetter();
  }; 
};

