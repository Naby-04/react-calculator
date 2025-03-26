class Boutton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="col-3 p-1">
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
        <div className="col-3 p-1">
          <button id="operator" className="btn py-4 px-1 mb-2 w-100">
            {this.props.operator}
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
    this.state = {
      operation: 0,
      resultat: 0,
    };
  }
  render() {
    return (
      <>
        <div className="screen-border mb-2">
          <div
            id="screen"
            className="container bg-light py-3 d-flex flex-column text-end"
          >
            <span id="operation">{this.state.resultat}</span>
            <span id="resultat">{this.state.resultat}</span>
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
  }
  // --------- Methodes section -----------

  // --------- Methodes section exit -----------
  render() {
    // ---------------------
    return (
      <>
        <div id="calculator" className="container p-4 rounded">
          <Screen />
          <div className="Bouttons row px-2">
            <Boutton number="7" />
            <Boutton number="8" />
            <Boutton number="9" />
            <Operator operator="/" />
            {/* -------------------- */}
            <Boutton number="4" />
            <Boutton number="5" />
            <Boutton number="6" />
            <Operator operator="x" />
            {/* -------------------- */}
            <Boutton number="1" />
            <Boutton number="2" />
            <Boutton number="3" />
            <Operator operator="-" />
            {/* -------------------- */}
            <Operator operator="." />
            <Boutton number="0" />
            <Operator operator="=" />
            <Operator operator="+" />
          </div>
        </div>
      </>
    );
  }
}

// Affichage du composant dans un élément HTML avec l'id "root"
ReactDOM.render(<App />, document.getElementById("root"));
