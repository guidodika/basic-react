const root = document.querySelector("#root");
function App() {
  const nameRef = React.useRef(null);
  function submit(event) {
    event.preventDefault();
    const nama = nameRef.current.value;
    console.log("Hai nama saya", nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    ref: nameRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);