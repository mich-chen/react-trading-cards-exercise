"use strict";

function Homepage() {
  return (
  //use React.Fragment to not overload page with extra elements
    <React.Fragment>
      <p>Hello Friend! Come check out Balloonicorn's Trading site!</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
