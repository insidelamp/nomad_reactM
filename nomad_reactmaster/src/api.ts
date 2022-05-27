// export async function fetchCoins() {
//   const response = await fetch(`https://api.coinpaprika.com/v1/coins`);
//   const json = await response.json();
//   return json;
// }

// 위처럼 사용해도됨

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
// 위 코드의 설명은 fetcher 함수 fetchCoin은 URL을 부르고 성공시 json 을 반환해줌

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
