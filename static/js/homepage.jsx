"use strict";

function Homepage() {
  return (
  //use React.Fragment to not overload page with extra elements
    <div>
      <p>Hello Friend! Come check out Balloonicorn's Trading site!</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
