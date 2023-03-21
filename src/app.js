const root = document.querySelector("#root");

function App() {
  const nameRef = React.useRef(null);

  function submit(event) {
    event.preventDefault();
    const nama = nameRef.current.value;
    console.log("Hai nama saya", nama);
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>Nama: </label>
        <input type="text" name="nama" ref={nameRef} />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
