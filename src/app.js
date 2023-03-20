const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Halaman Login</h1>
      <p>{login ? <b>Berhasil Login</b> : <i>Gagal Login</i>}</p>
      <button
        onClick={function () {
          setLogin(true);
        }}
      >
        Login
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
