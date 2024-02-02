import Button from './Button';

export default function ControlButtons({ Id, title, onFunctions, state }) {
  return (
    <>
      {state.isActive && state.isPaused === false ? (
        <Button
          Id={Id[2]}
          title={title[2]}
          handleFunction={onFunctions[2]}
        ></Button>
      ) : (
        <Button
          Id={Id[0]}
          title={title[0]}
          handleFunction={onFunctions[0]}
        ></Button>
      )}
      <Button
        Id={Id[1]}
        title={title[1]}
        handleFunction={onFunctions[1]}
      ></Button>
    </>
  );
}
