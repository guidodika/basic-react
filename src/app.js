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

const element = <div className="box"></div>;

ReactDOM.render(element, root);
