import { useState } from "react";

function App() {
  return (
    <div>
      <header>
        <h2>My balance</h2>
        <b>$921.48</b>
        <img src="" alt="logo" />
      </header>
      <main>
        <h1>Spending - Last 7 days</h1>
        <div>mon tue wed thu fri sat sun</div>
        <footer>
          <div>
            <h3>Total this month</h3>
            <b>$478.33</b>
          </div>

          <div>
            <p>+2.4%</p>
            <h3>from last month</h3>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
