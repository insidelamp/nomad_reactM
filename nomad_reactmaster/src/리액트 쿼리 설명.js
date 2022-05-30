/*


리액트 쿼리 사용법

npm install react-query 또는 yarn add react-query 

index.js 및 index.tsx 에 QueryClient 임포트 연결

QueryClient 를 실행시키는 변수를 담는 

const queryClient = new QueryClient(); 추가

<React.StrictMode> 밑에 <QueryClientProvider>생성 후 client={queryClient} 연결


리액트 쿼리는 데이터 페칭 , 데이터 동기화, 데이터 업데이트 , 데이터 케싱을 도와주고 두개의 훅과 하나의 유틸리티 함수로 작성할 코드수를 줄여줍니다

전에 사용되던 코드들

// const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

리액트 쿼리는 서버의 값을 클라이언트에 가져오거나 캐싱, 값 업데이트 , 에러 헨들링등 비동기 과정을 더욱 편하게 하는데 사용된다 

리액트 쿼리를 사용하기위해서 첫단계로 fetcher 함수를 만들어줘야한다 

예 ) 

//패치함수 : await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

fetcher 함수는 꼭 fetch promise 를 return 해줘야함 

export async function fetchCoins() {
    const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    const json = await response.json();
    return json;

}

위 fetcher함수는 json data ( json data Promise )를 return 해줘야함 

export async function fetchCoins() {
  const response = await fetch(`https://api.coinpaprika.com/v1/coins`).then(
    (response) => response.json()
  );
}

const {isLoading, data} = useQuery("allCoins", fetchCoins)


1. Api 를 fetch 하고 json 을 반환하는 함수를 만들어줌 
2. useQuery라는 훅을 react-query 에서 임포트하여 사용할 준비를 함 
3. useQuery는 2가지 argument를 필요로함 (
    1. queryKey = query의 고유식별자 
    2. fetch 함수 = api.ts 에다 만든 fetchCoins 
)
4. useQuery 가 멋진점중 하나는 isLoading 라고 불리는 boolean 값을 반환함 ( 전에 사용되던 코드에서 loading 및 setLoading 등을 대체 가능함 )

    useQuery 훅은 데이터를 불러오는 코드를 리액트 쿼리 라브러리에 등록하기위해 사용합니다
    useQuery는 키와 데이터를 불러오는 비동기 함수를 인자로 받아 어플레키이션의 현재 상태를 나타내는 다양한 값을 반환합니다

    1. useQuery 훅은 argment의 2번쨰인자에 작성된 fetcher( fetchCoins ) 함수를 부른다
    2. fetcher 함수가 loading중이라면 react query 는 여기서 그걸 {isloading}로 알려준다
    3. fetcher 함수가 끝나면 fetcher 함수에서 반환되는 json 값을 data에 넣어준다  
    4. 처음 로딩시에 데이터를 가져오는동안 loading 이 보이고 로딩 완료시 데이터가 보이며 데이터는 캐시에 저장된다
    5. 데이터가 업데이트되지않은상태에서 뒤로가기후 같은 코인 id 로 접속시에 loading 보이지않고 해당 데이터가 캐시에 저장되있어 바로 가져온다 
    6. 리액트쿼리는 데이터를 유지하고있는다 ( 리액트 쿼리는 api로부터 데이터를 ( response ) 받아  캐싱(저장)함 )




*/

/*

const {isLoading, data} = useQuery("allCoins", fetchCoins)

리액트 쿼는 기본적으로 fetcher 함수와 연결시켜서 isLoading 같은 함수가 불렸는지 아닌지를 알려주고 fetchCoins가 실행됨
fetchCoins 함수가 끝났을때 data에 값을 넣어줘 data에 쉬운방법으로 접근할수있게해줌 

이 외에도 리액트 쿼리에는 캐싱( Caching ) 매커니즘을 가지고있음 
만약  query 에 공유한 key 값을 react query에 넘겨주었다면  react query 는 Loadng을 다시 보여주지 말라는걸 알게됨 

react query 에는 ReactQueryDevtools 라는 걸 갖고있음
이 ReactQueryDevtools 에는  캐시에 어떤 query 가있는지 보여주고 결과가 무엇인지도 Data Explorer 로 보여줌

*/
