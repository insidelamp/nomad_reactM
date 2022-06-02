// export async function fetchCoins() {
//   const response = await fetch(`https://api.coinpaprika.com/v1/coins`);
//   const json = await response.json();
//   return json;
// }

// 위처럼 사용해도됨

// 위 코드의 설명은 fetcher 함수 fetchCoin은 URL을 부르고 성공시 json 을 반환해줌

// Math.ceil -> 숫자가 1.9일경우 오름차순해서 2.0 이 보이게됨
// Math.floor -> 숫자가 1.9일경우 내림차순해서 1.0 이 보이게됨
//30번째 설명 endDate - 60초 * 60분 * 24시간 * 7일 * 2주

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  console.log(111, coinId);
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}

/*


export async function fetchCoins()
{
    const response = await fetch(`https://api.coinpaprika.com/v1/coins`);
    const json = await response.json();
    return json;
} 
export async function fetchCoinInfo(CoinId:string) {
    const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${CoinId}`))
    .json();
    return infoData;
}
export async function fetchPriceData(CoinId:string) {
    const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${CoinId}`))
    .json()
    return priceData;
}
const endTime = Math.floor(Date.now() / 1000);
const startTime = endTime - (3600 * 24 * 14);
export async function  fetchCoinhistory(CoinId : string) {
    const Coinhistory = await (await fetch(`https://api.coinpaprika.com/v1/coins/${CoinId}/ohlcv/historical?start=${startTime}&end=${endTime}
    `))
    .json();
    return Coinhistory;
}

*/
