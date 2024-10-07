export default function App() {
  return (
    <div>
      <input type="text" list="fruits" />

      <datalist id="fruits">
        <option value="Apple" />
        <option value="Blueberry" />
        <option value="Pear" />
        <option value="Strawberry" />
      </datalist>
    </div>
  );
}
