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

function eventClick() {
  alert("Hello World");
}
function eventClickWithParam(msg) {
  alert(msg);
}
const element = /*#__PURE__*/React.createElement("button", {
  onClick: eventClickWithParam.bind(this, "Aku diklik nih")
}, "Klik Disini!");
ReactDOM.render(element, root);