export function Flatten(arr) {
  return Array.prototype.concat(...arr);
}

export function shuffleArticles(arr) {
  let shuffledArray = [];
  let arrTemp = [];

  arr.forEach(e => {
    arrTemp.push(e.results);
  });

  arrTemp.forEach(e => {
    shuffledArray = [...shuffledArray, e.slice(0, 5)]; //grab only the first 5 occurencies from each section
  });


  const result = Flatten(shuffledArray).sort(() => Math.random() - 0.6);

  return result;
}
