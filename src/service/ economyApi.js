const BASE_URL_API = 'https://economia.awesomeapi.com.br/json/all';

const fecthEconomyApi = async () => {
  const response = await fetch(BASE_URL_API);
  const result = await response.json();
  return result;
};

const infoApi = fecthEconomyApi();

export default infoApi;
