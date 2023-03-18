const root = document.querySelector("#root");
//Rendering

console.log("Hello Guys Hai");

function tick() {
  const element = (
    <div>
      <h1>Jam Sekarang</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
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
