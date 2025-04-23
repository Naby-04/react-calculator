// Boutton pour les chiffres
class Boutton extends React.Component {
  render() {
    return (
      <div className="col-3 p-1">
        <button
          id="btn"
          className="btn py-2 px-1 mb-2 w-100"
          onClick={() => this.props.handleClick(this.props.number)}
        >
          {this.props.number}
        </button>
      </div>
    );
  }
}

// Boutton pour les opérateurs
class Operator extends React.Component {
  render() {
    return (
      <div className="col-3 p-1">
        <button
          id="operator"
          className="btn py-2 mb-2 w-100"
          onClick={() => this.props.handleClick(this.props.operator)}
        >
          {this.props.operator}
        </button>
      </div>
    );
  }
}

// Affichage à l'écran
class Screen extends React.Component {
  render() {
    return (
      <div className="screen-border mb-2">
        <div
          id="screen"
          className="container bg-light py-3 d-flex flex-column text-end"
        >
          <span>{this.props.operation}</span>
          <span>{this.props.resultat}</span>
        </div>
      </div>
    );
  }
}

// Composant principal
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      resultat: 0,
    };
  }

  // 👉 Lorsqu'on clique sur un chiffre ou un opérateur (sauf =)
  handleClick = (value) => {
    if (value === "=") {
      this.calculate();
    } else {
      // Remplace le x par * pour le calcul JS
      const op = value === "x" ? "*" : value;
      this.setState({ operation: this.state.operation + op });
    }
  };

  // 👉 Effectuer le calcul
  calculate = () => {
    try {
      const result = eval(this.state.operation);
      this.setState({ resultat: result });
    } catch (e) {
      this.setState({ resultat: "Erreur" });
    }
  };

  // Réinitialise l'opération et le résultat
  resetCalculator = () => {
    this.setState({
      operation: "",
      resultat: 0,
    });
  };

  render() {
    return (
      <div id="calculator" className="container p-4 rounded">
        <Screen
          operation={this.state.operation}
          resultat={this.state.resultat}
        />
        <Operator operator="C" handleClick={this.resetCalculator} />

        <div className="Bouttons row px-2">
          {/* Boutons numériques */}
          <Boutton number="7" handleClick={this.handleClick} />
          <Boutton number="8" handleClick={this.handleClick} />
          <Boutton number="9" handleClick={this.handleClick} />
          <Operator operator="/" handleClick={this.handleClick} />

          <Boutton number="4" handleClick={this.handleClick} />
          <Boutton number="5" handleClick={this.handleClick} />
          <Boutton number="6" handleClick={this.handleClick} />
          <Operator operator="x" handleClick={this.handleClick} />

          <Boutton number="1" handleClick={this.handleClick} />
          <Boutton number="2" handleClick={this.handleClick} />
          <Boutton number="3" handleClick={this.handleClick} />
          <Operator operator="-" handleClick={this.handleClick} />

          <Operator operator="." handleClick={this.handleClick} />
          <Boutton number="0" handleClick={this.handleClick} />
          <Operator operator="=" handleClick={this.handleClick} />
          <Operator operator="+" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
