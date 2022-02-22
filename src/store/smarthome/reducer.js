const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: false },
  thermostat: 20,
};

// lamps.map(lamp => html dispatch(toggleLamp(Lamp_id)))

export default function reducer(state = initialState, action) {
  console.log("home reducer reveived", action);
  switch (action.type) {
    case "home/toggleLamp": {
      return {
        ...state,
        lamps: state.lamps.map((lamp) => {
          if (lamp.id === action.payload.lampId) {
            return { ...lamp, power: !lamp.power };
          } else {
            return lamp;
          }
        }),
      };
    }
    case "home/toggleRadio": {
      return {
        ...state,
        radio: { ...state.radio, power: !state.radio.power },
      };
    }
    case "home/setRadioGenre": {
      return {
        ...state,
        radio: { ...state.radio, genre: action.payload.newGenre },
      };
    }
    case "home/setHotness": {
      return { ...state, thermostat: parseInt(action.payload.newTemperature) };
    }
    default: {
      return state;
    }
  }
}
