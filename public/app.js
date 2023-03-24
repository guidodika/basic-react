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
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();
      setLoading(false);
      setNews(response);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading") : /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    return /*#__PURE__*/React.createElement("li", null, item.title);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);