const root = document.querySelector("#root");
console.log("Hello Guys Hai");

// const element = (
//   <div
//     style={{
//       width: 200,
//       height: 200,
//       backgroundColor: "blue",
//     }}
//   ></div>
// );

// const element = <div className="box"></div>;

// function eventClick() {
//   alert("Hello World");
// }

// function eventClickWithParam(msg) {
//   alert(msg);
// }

// const element = (
//   <button onClick={eventClickWithParam.bind(this, "Aku diklik nih")}>
//     Klik Disini!
//   </button>
// );

function App() {
  const [count, setState] = React.useState(0);

  // const count = state[0];
  // const setState = state[1];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count + 1);
    }
  }, "+"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);