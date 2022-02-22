import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectThermostat } from "../store/smarthome/selector";
import { setHotness } from "../store/smarthome/actions";

const ThermostatControl = () => {
  const dispatch = useDispatch();
  const thermostat = useSelector(selectThermostat);
  const [temperature, setTemperature] = useState(thermostat);

  return (
    <div>
      <h2>🔥Let's get hot in here!🔥</h2>
      <p>It's {thermostat}°C in da house!</p>
      <div>
        <input
          type="range"
          value={temperature}
          min={15}
          max={30}
          onChange={(event) => setTemperature(event.target.value)}
        />
        <h3 className="genre">{temperature}</h3>
        <div>
          <button onClick={() => dispatch(setHotness(temperature))}>
            SET HOTTNESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThermostatControl;
