"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer() {
  // create empty array
  const paragraphs = [];
  // for each card data in data array
  for (const currentCard of tradingCardData) {
    // add an html <p> tag with the card's name to paragraphs array
    paragraphs.push(<p>{currentCard.name}</p>);
  }

  // create new React fragment element with the <p> tag html from paragraphs into this section in html.
  return (
    <>
      {paragraphs}
    </>
  );
}

ReactDOM.render(
  <TradingCardContainer />, document.querySelector('#test')
  );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="merge"
//       skill="putting things together"
//       imgUrl="/static/img/merge.jpg"
//     />
//   ),
//   document.querySelector('#merge')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="off-by-one"
//       skill="forgetting stuff"
//       imgUrl="/static/img/off-by-one.jpg"
//     />
//   ),
//   document.querySelector('#off-by-one')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="polymorphism"
//       skill="remembering random facts"
//       imgUrl="/static/img/polymorphism.jpg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="seedpy"
//       skill="eating seeds"
//       imgUrl="/static/img/seedpy.jpg"
//     />
//   ),
//   document.querySelector('#seedpy')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="shortstack-overflow"
//       skill="answering stack overflow questions"
//       imgUrl="/static/img/shortstack-overflow.jpg"
//     />
//   ),
//   document.querySelector('#shortstack-overflow')
// );

