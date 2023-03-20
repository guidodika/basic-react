const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return (
      <>
        <h1>Sukses Login</h1>
        <button
          onClick={function () {
            setLogin(false);
          }}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Halaman Login</h1>
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
