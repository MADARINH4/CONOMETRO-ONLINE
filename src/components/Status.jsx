export default function Status({ timer, state }) {
  return (
    <>
      {!state.isActive && (
        <div id="status">
          {timer.map((time) => (
            <p key={`${Math.floor(Math.random() * time)}`}>
              <span>
                {('0' + Math.floor((time / 60000) % 60)).slice(-2) + ':'}
              </span>
              <span>
                {('0' + Math.floor((time / 1000) % 60)).slice(-2) + ':'}
              </span>
              <span>{('0' + time / 10).slice(-2)}</span>
            </p>
          ))}
        </div>
      )}
    </>
  );
}
