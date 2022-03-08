import { useEffect, useState } from "react";
const defaultItem = [
  {
    name: "item A",
  },
  {
    name: "item B",
  },
  {
    name: "item C",
  },
];

function ToDo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItem);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("")
  };

  return (
    <div>
      <br />
      <label> Text: 
      <input value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <button id={"input"} onClick={addItem}>Add</button>
      <br /> <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default ToDo;
