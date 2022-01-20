const requestGameAPI = async (token) => {
  console.log(`2,${token}`);
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await response.json();
  return result;
};

export default requestGameAPI;
