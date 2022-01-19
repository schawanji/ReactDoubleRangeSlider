export default function SliderInput() {
  let min = 20;
  let max = 100;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let values = getRandomInt();

  return <div>console.log(getRandomInt())</div>;
}
