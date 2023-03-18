const root = document.querySelector("#root");
//Rendering

console.log("Hello Guys Hai");
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);

  // const element = `
  //   <div>
  //     <h1>Jam Sekarang</h1>
  //     <h2>${new Date().toLocaleTimeString()}</h2>
  //   </div>
  // `;
  // root.innerHTML = element;
}

setInterval(function () {
  tick();
}, 1000);