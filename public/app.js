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
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: name,
    onChange: function (event) {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);