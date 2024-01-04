
function Square({value,onSquareCLick}) {
  return (
    <>
      <button className="square" onClick={onSquareCLick}>{value}</button>
    </>
  );
}

export default Square;
