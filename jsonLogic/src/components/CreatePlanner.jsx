import { useState } from "react";

const CreatePlanner = () => {
  const [name, setName] = useState("a");

  var [M_Box, setM_Box] = useState(false);
  var [T_Box, setT_Box] = useState(false); // false = second check box defaults to un-checked.
  var [W_Box, setW_Box] = useState(false);
  var [R_Box, setR_Box] = useState(false);
  var [F_Box, setF_Box] = useState(false);
  var [Sat_Box, setSat_Box] = useState(false);
  var [Sun_Box, setSun_Box] = useState(false);

  const [isPending, setIsPending] = useState(false);

  //TEST:
  //const [week, setWeek] = useState({});

  //const [time, setTime] = useState("");
  //const [type, setType] = useState("Unique One-Time");

  const handleSubmit = (e) => {
    e.preventDefault(); // use if you don't want info to 'disaper' after submit

    //console.log(e.target);
    let week = [0, 0, 0, 0, 0, 0, 0];
    week[0] = M_Box;
    week[1] = T_Box;
    week[2] = W_Box;
    week[3] = R_Box;
    week[4] = F_Box;
    week[5] = Sat_Box;
    week[6] = Sun_Box;

    const singleEvent = { name, week };

    setIsPending(true);

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singleEvent),
    }).then(() => {
      console.log("new task added");
      setIsPending(false);
    });
  };

  return (
    <div className="createPlanner">
      <h2>Create a new Schedule:</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="M">
          <input
            type="checkbox"
            checked={M_Box}
            onChange={() => setM_Box(!M_Box)}
          ></input>
          M
        </label>

        <label for="T">
          <input
            type="checkbox"
            checked={T_Box}
            onChange={() => setT_Box(!T_Box)}
          ></input>
          T
        </label>

        <label for="W">
          <input
            type="checkbox"
            checked={W_Box}
            onChange={() => setW_Box(!W_Box)}
          ></input>
          W
        </label>

        <label for="R">
          <input
            type="checkbox"
            checked={R_Box}
            onChange={() => setR_Box(!R_Box)}
          ></input>
          R
        </label>

        <label for="F">
          <input
            type="checkbox"
            checked={F_Box}
            onChange={() => setF_Box(!F_Box)}
          ></input>
          F
        </label>

        <label for="Sat">
          <input
            type="checkbox"
            checked={Sat_Box}
            onChange={() => setSat_Box(!Sat_Box)}
          ></input>
          Sat
        </label>

        <label for="Sun">
          <input
            type="checkbox"
            checked={Sun_Box}
            onChange={() => setSun_Box(!Sun_Box)}
          ></input>
          Sun
        </label>

        {!isPending && <button>Submit This Event</button>}
        {isPending && <button>Adding Blog...</button>}
        <p>{name}</p>
      </form>
    </div>
  );
};

export default CreatePlanner;
