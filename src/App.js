import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        list="fruits"
        value={search}
        onChange={(event) => {
          const value = event.target.value;

          setSearch(value);
        }}
      />

      <datalist id="fruits">
        <option value="Apple" />
        <option value="Blueberry" />
        <option value="Pear" />
        <option value="Strawberry" />
      </datalist>
    </div>
  );
}
