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

  return (
    <div>
      <button
        onClick={function () {
          setState(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setState(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, root);
