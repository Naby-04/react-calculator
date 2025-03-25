class Boutton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="col-4 p-1">
          <button id="btn" className="btn py-4 px-1 mb-2 w-100">
            {this.props.number}
          </button>
        </div>
      </>
    );
  }
}

// ------------------------
class Operator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="p-1">
          <button id="operator" className="btn py-4 px-1 mb-2 w-100">
            x
          </button>
        </div>
      </>
    );
  }
}

// ------------------------
class Screen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="screen-border mb-2 p-0">
          <div
            id="screen"
            className="container py-3 d-flex flex-column text-end"
          >
            <span id="operation">18 x 3 + 8</span>
            <span id="resultat">62</span>
          </div>
        </div>
      </>
    );
  }
}

// ------------------------
class App extends React.Component {
  // --------------------
  constructor(props) {
    super(props);
    this.state = {
      number: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    };
  }
  // --------- Methodes section -----------

  // --------- Methodes section exit -----------
  render() {
    // ---------------------
    return (
      <>
        <div id="calculator" className="container row p-3 rounded">
          <Screen />
          <div className="col-9 row m-0 p-0 ">
            {/* ---------------- */}
            {this.state.number.map((num, index) => (
              <Boutton key={index} number={num} />
            ))}
          </div>
          {/* ---------------- */}
          <div className="col-3 p-0 m-0">
            <Operator />
            <Operator />
            <Operator />
            <Operator />
          </div>
        </div>
      </>
    );
  }
}

// Affichage du composant dans un élément HTML avec l'id "root"
ReactDOM.render(<App />, document.getElementById("root"));
