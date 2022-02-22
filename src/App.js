import "./App.css";

import { useSelector } from "react-redux";
import { selectLamps, selectRadio } from "./store/smarthome/selector";

import LampControl from "./components/LampControl";
import RadioControl from "./components/RadioControl";
import ThermostatControl from "./components/ThermostatControl";
import { selectPUConsumption } from "./store/smarthome/selector";

function App() {
  const lamps = useSelector(selectLamps);
  const PUConsumption = useSelector(selectPUConsumption);

  return (
    <div className="App">
      <h1>Smart 🏠</h1>
      <p>
        Total Power Consumption: <span className="genre"> {PUConsumption}</span>
      </p>
      <h3>Let there be light!</h3>
      {lamps.map((lamp, i) => (
        <LampControl key={i} lamp={lamp} />
      ))}
      <div>
        <RadioControl />
      </div>
      <div>
        <ThermostatControl />
      </div>
    </div>
  );
}

export default App;
