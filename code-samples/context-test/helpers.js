export const generateRandomArray = (max) => {
  const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  let t = [];
  for (let i = 0; i < Math.floor(max); i++) {
    t.push(randomInt(i));
  }

  return t;
};
