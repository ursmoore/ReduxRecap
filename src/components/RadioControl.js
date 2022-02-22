import { useDispatch, useSelector } from "react-redux";
import { selectRadio } from "../store/smarthome/selector";
import { toggleRadio, setRadioGenre } from "../store/smarthome/actions";
import { useState } from "react";

const RadioControl = () => {
  const dispatch = useDispatch();
  const radio = useSelector(selectRadio);
  const [genre, setGenre] = useState("");

  return (
    <div>
      <h3>Let the music play!</h3>
      <p>📻 {radio.power ? "ON" : "OFF"}</p>
      <button onClick={() => dispatch(toggleRadio)}>⏻</button>
      <h3>
        Genre: <span className="genre"> {radio.genre}</span>
      </h3>
      <input value={genre} onChange={(event) => setGenre(event.target.value)} />
      <button onClick={() => dispatch(setRadioGenre(genre))}>SET GENRE</button>
    </div>
  );
};

export default RadioControl;
