const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function addToDoHandler(event) {
    event.preventDefault();

    setTodos([...todos, activity]);
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
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
