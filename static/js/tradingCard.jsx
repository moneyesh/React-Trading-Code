'use strict';

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];


//          1.Where is static/js/tradingCard.jsx getting pulled into the webpage?
//--via script in line 6 of cards.html by way of js

//          2.How does each trading card get mounted into the DOM?
//--Iesha says -reactDOM.render..//ReactDOM.render = WHAT TO PUT AND WHERE

//E says-trading card function

//Each trading card gets mounted into the DOM in tradingCard.jsx via reactdom.render=the "WHAT"
// For each card, an element is selected using document.querySelector=the "WHERE"
// Then, an instance of the TradingCard component is created, providing 
// different props for each trading card. The HTML for each trading card 
// is provided by the render method on the TradingCard React component.

//          3.Why is there only one TradingCard component definition, while there are three trading cards on the page itself?
//iesha says-trading card is general 
//e says-the one covers all three

//          4.What are the props for each trading card? How are the props being rendered onto the page?
//--name, skill and imgurl
//--via componnent OR line 19 where it says const. 

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg',
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      {/*  The HTML for each trading card 
// is provided by the render method on the TradingCard React component. */}

{/* We only have to define TradingCard once. It provides a blueprint of how 
a trading card should look. This blueprint is then used to create a variety 
of different trading cards.  */}
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}


// each ReactDOM are similar to instances
//Then, an instance of the TradingCard component is created, providing 
// different props for each trading card. 
ReactDOM.render(
  <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
  document.querySelector('#balloonicorn'),
);

ReactDOM.render(
  <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
  document.querySelector('#float'),
);

ReactDOM.render(
  <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
  document.querySelector('#llambda'),
);


ReactDOM.render(
  <TradingCard name="polymorphism" skill="juggling" imgUrl="/static/img/polymorphism.jpeg" />,
  document.querySelector('#polymorphism'),
);

ReactDOM.render(
<TradingCard name="seedpy" skill="gardening" imgUrl="/static/img/seedpy.jpeg" />, document.querySelector("#seedpy"),
);


//  think about how you would structure your trading card data in either Python or JavaScript.
// via AJAX in some kind of tidy JSON data structure. 

//DICTIONARYYY-iesha

