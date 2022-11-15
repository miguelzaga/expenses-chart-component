import data from "/src/data/data.json";

let today = new Date();
let weekday = (today.getDay() + 6) % 7;

(function addPercentageToData(data) {
  var maxAmount = data.reduce(function getMaxAmount(maxSoFar, { amount }) {
    if (amount > maxSoFar) {
      return amount;
    } else {
      return maxSoFar;
    }
  }, 0);

  return data.forEach(function addPercentage(obj) {
    return (obj.percentage = `${100 * (obj.amount / maxAmount)}%`);
  });
})(data);

function Graph() {
  return (
    <div className="graph">
      {data.map(function renderData(day, i) {
        return (
          <div key={day + i} className="graph__cell">
            <div className="graph__bar">
              <div
                className={`graph__bar-fill ${
                  weekday == i ? "graph__bar-fill--highlighted" : ""
                }`}
                style={{ height: day.percentage }}
              ></div>
              <div
                className="graph__bar-amount"
                style={{ bottom: day.percentage }}
              >{`$${day.amount}`}</div>
            </div>
            <p className="graph__name">{day.day}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Graph;
