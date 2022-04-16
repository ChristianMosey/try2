import { useState } from "react";

const CreatePlanner = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Unique One-Time");

  const handleSubmit = (e) => {
    e.preventDefault(); // use if you don't want info to 'disaper' after submit
    const singleEvent = { name, time, type };

    console.log(singleEvent);
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

        <label>Time of Event:</label>
        <input
          type="text"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label>Type of Event:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Unique One-Time">Unique One-Time</option>
          <option value="Multi-Day Reocurring">Multi-Day Reocurring</option>
        </select>

        <button>Submit Schedule</button>
        <p>{name}</p>
        <p>{time}</p>
        <p>{type}</p>
      </form>
    </div>
  );
};

export default CreatePlanner;
