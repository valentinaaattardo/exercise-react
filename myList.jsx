function MyListItem({ item }) { 
    return (
      <li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.age} years old.</p>
      </li>
    );
  }


  export function MyList({ items }) {
    return (
      <ul>
        {items.map((item) => (
          <MyListItem key={item.id} item={item} /> 
        ))}
      </ul>
    );
  }