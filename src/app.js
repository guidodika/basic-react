const root = document.querySelector("#root");

function App() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      console.log(document.querySelector("#judul"));
    },
    [click, count]
  );

  return (
    <>
      <h1 id="judul">Hello ini judul</h1>
      <button
        onClick={function () {
          setClick(true);
        }}
      >
        Klik Disini
      </button>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <p>{count}</p>
    </>
  );
}

setTimeout(function () {
  ReactDOM.render(<App />, root);
}, 1000);
