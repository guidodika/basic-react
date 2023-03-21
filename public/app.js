const root = document.querySelector("#root");
function App() {
  const fruits = ["Apple", "Grape", "Watermelon", "Banana"];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);