const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Halaman Login</h1>
      {/* jika tidak ingin ada kondisi else, bisa pakai && */}
      <p>{login && <b>Berhasil Login</b>}</p>
      {/* <p>{login ? "Berhasil Login" : "Gagal Login"}</p> */}
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
