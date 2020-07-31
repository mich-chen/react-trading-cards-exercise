"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  }
]

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn')
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float')
);

ReactDOM.render(
  (
    <TradingCard
      name="Llambda"
      skill="knitting scarves"
      imgUrl="/static/img/llambda.jpg"
    />
  ),
  document.querySelector('#llambda')
);

ReactDOM.render(
  (
    <TradingCard
      name="merge"
      skill="putting things together"
      imgUrl="/static/img/merge.jpg"
    />
  ),
  document.querySelector('#merge')
);

ReactDOM.render(
  (
    <TradingCard
      name="off-by-one"
      skill="forgetting stuff"
      imgUrl="/static/img/off-by-one.jpg"
    />
  ),
  document.querySelector('#off-by-one')
);

ReactDOM.render(
  (
    <TradingCard
      name="polymorphism"
      skill="remembering random facts"
      imgUrl="/static/img/polymorphism.jpg"
    />
  ),
  document.querySelector('#polymorphism')
);

ReactDOM.render(
  (
    <TradingCard
      name="seedpy"
      skill="eating seeds"
      imgUrl="/static/img/seedpy.jpg"
    />
  ),
  document.querySelector('#seedpy')
);

ReactDOM.render(
  (
    <TradingCard
      name="shortstack-overflow"
      skill="answering stack overflow questions"
      imgUrl="/static/img/shortstack-overflow.jpg"
    />
  ),
  document.querySelector('#shortstack-overflow')
);

