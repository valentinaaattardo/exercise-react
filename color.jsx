export function Color({ color }) {
    return (
      <li key={color.id}>
        <h3>{color.name}</h3>
      </li>
    );
  }