const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Halaman Login"), /*#__PURE__*/React.createElement("p", null, login ? /*#__PURE__*/React.createElement("b", null, "Berhasil Login") : /*#__PURE__*/React.createElement("i", null, "Gagal Login")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);