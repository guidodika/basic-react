const root = document.querySelector("#root");

function App() {
  //form react
  //controlled component with state
  //uncontrolled component with node dom (ref)
  const [name, setName] = React.useState("Guido");

  function submit(event) {
    event.preventDefault();
    console.log("Hai nama saya", name);
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>Nama: </label>
        <input
          type="text"
          name="nama"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
