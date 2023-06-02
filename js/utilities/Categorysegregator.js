module.exports.Segregator = (data) => {
  const segregated = {
    General: 0,
    Fuel: 0,
    Grocery: 0,
    Fun: 0,
    Shopping: 0,
    Travel: 0,
    Food: 0,
  };
  let total = 0;

  data?.forEach((item) => {
    console.log(item);
    segregated[item?.category] += parseInt(Math.floor(item?.amount));
    total += parseInt(item?.amount);
  });
  return [segregated, total];
};
