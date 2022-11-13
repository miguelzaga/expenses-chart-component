import { useState } from "react";

function App() {
  return (
    <div className="wrapper">
      <main className="component">
        <header className="component__header">
          <h2 className="component__balance">My balance</h2>
          <b className="component__balance-num">$921.48</b>
          <img className="component__logo" src="" alt="logo" />
        </header>
        <div className="component__main">
          <h1 className="component__title">Spending - Last 7 days</h1>
          <div className="component__graph">mon tue wed thu fri sat sun</div>
          <div className="component__bottom">
            <div className="component__bottom-left">
              <h3 className="component__total">Total this month</h3>
              <b className="component__total-num">$478.33</b>
            </div>
            <div className="component__bottom-right">
              <p className="component__last">+2.4%</p>
              <h3 className="component__last-num">from last month</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
