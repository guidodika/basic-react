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

const element = /*#__PURE__*/React.createElement("div", {
  className: "box"
});
ReactDOM.render(element, root);