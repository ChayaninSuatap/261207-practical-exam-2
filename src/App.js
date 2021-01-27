import PersonTable from "./PersonTable";
import { useState } from "react";

function App() {
  const [id, setId] = useState(610631100);
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      <PersonTable name="Bob" gender="male" age="50" />
      <PersonTable name="Alice" gender="female" age="40" />
      <PersonTable name="Chayanin Suatap 610631100" gender="male" age="25" />

      <h3 class="title is-3">ID Counter</h3>
      <p>{id}</p>
      <button onClick={() => setId(id + 1)}>+</button>
      <button onClick={() => setId(id - 1)}>-</button>
    </div>
  );
}

export default App;
