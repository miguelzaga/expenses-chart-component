import logo from "/src/images/logo.svg";
import Graph from "/src/components/Graph.js";

function App() {
  return (
    <div className="wrapper">
      <main className="component">
        <header className="component__header">
          <div>
            <h2 className="component__balance">My balance</h2>
            <b className="component__balance-num">$921.48</b>
          </div>
          <img className="component__logo" src={logo} alt="logo" />
        </header>
        <div className="component__main">
          <h1 className="component__title">Spending - Last 7 days</h1>
          <div className="component__graph">
            <Graph />
          </div>
          <div className="component__bottom">
            <div className="component__bottom-left">
              <h2 className="component__total">Total this month</h2>
              <b className="component__total-num">$478.33</b>
            </div>
            <div className="component__bottom-right">
              <h2 className="component__last">from last month</h2>
              <p className="component__last-num">+2.4%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
