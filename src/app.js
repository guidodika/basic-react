const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  //generate id agar bisa membedakan antar item state activity
  //disini menggunakan tanggal untuk generate id
  function generateId() {
    return Date.now();
  }

  function saveToDoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage("Aktifitas Tidak Boleh Kosong!");
    }

    setMessage("");

    //edit todo
    if (edit.id) {
      const updateToDo = {
        ...edit,
        activity,
      };

      const editToDoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedToDo = [...todos];

      updatedToDo[editToDoIndex] = updateToDo;

      setTodos(updatedToDo);

      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
        done: false,
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

    if (edit.id) {
      cancelEditHandler();
    }
  }

  function editToDoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }

  function doneToDoHandler(todo) {
    const updatedToDo = {
      // id: todo.id,
      // activity: todo.activity, (sama seperti ...todo)
      ...todo,
      done: todo.done ? false : true,
    };

    const editToDoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });

    const updatedToDos = [...todos];

    updatedToDos[editToDoIndex] = updatedToDo;

    setTodos(updatedToDos);
  }

  return (
    <>
      <h1>To Do List</h1>
      {message && <div style={{ color: "red" }}>{message}</div>}
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
        {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneToDoHandler.bind(this, todo)}
                />
                {todo.activity}({todo.done ? "Selesai" : "Belum Selesai"})
                <button onClick={editToDoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeToDoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Tidak ada aktifitas</i>
        </p>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
