import { Color } from "./color";

export function Colors({ colors }) {
  return (
    <div>
        <h2>Colors List:</h2>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}