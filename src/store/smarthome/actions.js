export const toggleLamp = (lampId) => ({
  type: "home/toggleLamp",
  payload: { lampId: lampId },
});

export const toggleRadio = {
  type: "home/toggleRadio",
};

export const setRadioGenre = (newGenre) => ({
  type: "home/setRadioGenre",
  payload: { newGenre: newGenre },
});

export const setHotness = (newTemperature) => ({
  type: "home/setHotness",
  payload: { newTemperature: newTemperature },
});
