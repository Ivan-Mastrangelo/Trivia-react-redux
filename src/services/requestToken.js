const url = 'https://opentdb.com/api_token.php?command=request';

const requestTokenAPI = async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default requestTokenAPI;
