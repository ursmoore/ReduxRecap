export const selectLamps = (state) => state.home.lamps;

export const selectRadio = (state) => state.home.radio;

export const selectThermostat = (state) => state.home.thermostat;

const totalPowerConsumption = (house) => {
  let lampConsumption = 0;
  house.lamps.forEach((lamp) => {
    if (lamp.power) {
      lampConsumption = lampConsumption + 25;
    }
  });
  let radioConsumption = house.radio.power ? 25 : 0;

  let thermostatConsumption =
    house.thermostat > 20 ? (house.thermostat - 20) * 10 : 0;
  return lampConsumption + radioConsumption + thermostatConsumption;
};

export const selectPUConsumption = (state) => totalPowerConsumption(state.home);
