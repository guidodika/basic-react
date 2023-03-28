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
        activity
      };
      const editToDoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedToDo = [...todos];
      updatedToDo[editToDoIndex] = updateToDo;
      setTodos(updatedToDo);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity: activity,
      done: false
    }]);
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
      done: todo.done ? false : true
    };
    const editToDoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedToDos = [...todos];
    updatedToDos[editToDoIndex] = updatedToDo;
    setTodos(updatedToDos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "To Do List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveToDoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ketikkan sesuatu",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, edit.id ? "Simpan Perubahan" : "Tambahkan"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneToDoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? "Selesai" : "Belum Selesai", ")", /*#__PURE__*/React.createElement("button", {
      onClick: editToDoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeToDoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada aktifitas")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);