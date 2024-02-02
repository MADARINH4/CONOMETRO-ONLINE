export default function Button({ Id, title, handleFunction }) {
  return (
    <button onClick={handleFunction} id={Id}>
      {title}
    </button>
  );
}
