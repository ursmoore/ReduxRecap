import { useDispatch } from "react-redux";
import { toggleLamp } from "../store/smarthome/actions";

const LampControl = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="lampControl">
      <p>Lamp no. {props.lamp.id}</p>
      <p>{props.lamp.power ? "🌇" : "🌃"} </p>
      <button onClick={() => dispatch(toggleLamp(props.lamp.id))}>💡</button>
    </div>
  );
};

export default LampControl;
