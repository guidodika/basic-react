const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  //generate id agar bisa membedakan antar item state activity
  //disini menggunakan tanggal untuk generate id
  function generateId() {
    return Date.now();
  }

  function addToDoHandler(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity("");
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={addToDoHandler}>
        <input
          type="text"
          placeholder="Ketikkan sesuatu"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button>Tambahkan</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return <li key={todo.id}>{todo.activity}</li>;
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
