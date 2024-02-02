export default function ({ result }) {
  return (
    <div id="box">
      <div id="timer">
        <span>{('0' + Math.floor((result / 60000) % 60)).slice(-2) + ':'}</span>
        <span>{('0' + Math.floor((result / 1000) % 60)).slice(-2) + ':'}</span>
        <span>{('0' + result / 10).slice(-2)}</span>
      </div>
    </div>
  );
}
