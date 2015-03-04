
 describe('Thermostat', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has an initial temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function(){
    expect(thermostat.temperature).toEqual(20);
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature', function(){
    expect(thermostat.temperature).toEqual(20);
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    while(thermostat.temperature > 11) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(11);
    thermostat.decrease();
    expect(function() {thermostat.decrease();}).toThrow(new Error("Too cold, there is schneefloeckchen on the window"));
  });

  it('has a maximum temperature of 32 degrees', function(){
    thermostat.powerSwitch();
    while(thermostat.temperature < 31) {
      thermostat.increase();
    };
    expect(thermostat.temperature).toEqual(31);
    thermostat.increase();
    expect(function() {thermostat.increase();}).toThrow(new Error("This is too hot."));
  });

  it('has a resetter button that resets temperature to twenty', function(){
    thermostat.resetter();
    expect(thermostat.temperature).toEqual(20)
  });
});


describe('Powersaver', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('is switched on by default', function(){
    expect(thermostat.powerSaver).toEqual(true);
  });

  it('can be switched off', function(){
    expect(thermostat.powerSaver).toEqual(true);
    thermostat.powerSwitch();
    expect(thermostat.powerSaver).toEqual(false);
  });

  it('can be switched back on', function(){
    thermostat.powerSwitch();
    thermostat.powerSwitch();
    expect(thermostat.powerSaver).toEqual(true);
  });

  it('if on has max temp of 25 degrees', function(){
    while(thermostat.temperature < 25) {
      thermostat.increase();
    };
    thermostat.increase();
    expect(thermostat.temperature).toEqual(25)
  });

  it('switched on when temperature greater than 25 reset', function(){
    thermostat.powerSwitch();
    while(thermostat.temperature < 25) {
      thermostat.increase();
    };
    thermostat.powerSwitch();
    expect(thermostat.temperature).toEqual(20);
  });

});





