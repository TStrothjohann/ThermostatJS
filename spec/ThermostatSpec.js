
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
    while(thermostat.temperature > 10) {
      thermostat.decrease();
    };
    expect(thermostat.temperature).toEqual(10);
    thermostat.decrease();
    expect(function() {thermostat.decrease();}).toThrow(new Error("Too cold, there is schneefloeckchen on the window"));
  });

  it('has a maximum temperature of 32 degrees', function(){
    while(thermostat.temperature < 32) {
      thermostat.increase();
    };
    expect(thermostat.temperature).toEqual(32);
    thermostat.increase();
    expect(function() {thermostat.increase();}).toThrow(new Error("This is too hot."));
  });

  it('has a resetter button that resets temperature to twenty', function(){
    thermostat.resetter();
    expect(thermostat.temperature).toEqual(20)
  });

  it('has power-saver switched on by default', function(){
    expect(thermostat.powerSaver).toEqual(true);
  });




 });