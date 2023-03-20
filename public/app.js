const root = document.querySelector("#root");
function App() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);

  /*gunakan empty array [] jika function ini hanya di render sekali saja 
  walaupun state berubah*/
  React.useEffect(function () {
    console.log(document.querySelector("#judul"));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick(true);
    }
  }, "Klik Disini"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), /*#__PURE__*/React.createElement("p", null, count));
}
setTimeout(function () {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
}, 1000);