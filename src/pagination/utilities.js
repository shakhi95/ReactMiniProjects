const paginate = (bigArray) => {
  //
  const itemPerArray = 10;
  const numOfSmallArrays = Math.ceil(bigArray.length / itemPerArray);

  const arrayOfArrays = Array.from({ length: numOfSmallArrays }, (_, index) => {
    const start = index * itemPerArray;

    return bigArray.slice(start, start + itemPerArray);
  });

  return arrayOfArrays;
};

export default paginate;
