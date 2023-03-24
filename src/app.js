const root = document.querySelector("#root");

//data fetching dengan promises chaining
// function App() {
//   React.useEffect(function () {
//     const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (response) {
//         console.log(response);
//       });
//     console.log(getData);
//   }, []);
//   return <h1>Data Fetch</h1>;
// }

//data fetching dengan async await

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();
      setLoading(false);
      setNews(response);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Loading</i>
      ) : (
        <ul>
          {news.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
