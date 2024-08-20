export function MyButton({text, onClick, color}) {
    return (
      <button onClick={onClick}    style={{ backgroundColor: color, padding: '10px', border: 'none', color: 'white' }}>{text}</button>
    );
  }