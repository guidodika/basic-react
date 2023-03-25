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
    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity("");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "To Do List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addToDoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ketikkan sesuatu",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, "Tambahkan")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);