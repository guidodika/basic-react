const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);

  //generate id agar bisa membedakan antar item state activity
  //disini menggunakan tanggal untuk generate id
  function generateId() {
    return Date.now();
  }

  function saveToDoHandler(event) {
    event.preventDefault();

    //edit todo
    if (edit.id) {
      const updateToDo = {
        id: edit.id,
        activity,
      };

      const editToDoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedToDo = [...todos];

      updatedToDo[editToDoIndex] = updateToDo;

      return setTodos(updatedToDo);
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity("");
  }

  //menghapus todo
  function removeToDoHandler(todoId) {
    const filteredToDo = todos.filter(function (todo) {
      console.log(todoId, todo.id);
      return todo.id !== todoId;
    });

    setTodos(filteredToDo);
  }

  function editToDoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={saveToDoHandler}>
        <input
          type="text"
          placeholder="Ketikkan sesuatu"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button>{edit.id ? "Simpan Perubahan" : "Tambahkan"}</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              {todo.activity}
              <button onClick={editToDoHandler.bind(this, todo)}>Edit</button>
              <button onClick={removeToDoHandler.bind(this, todo.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
