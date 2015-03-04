 describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has an initial temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function(){
    expect(thermostat.temperature).toEqual(20)
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });
 });