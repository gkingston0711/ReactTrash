import NavBar from "./NavBar";
import Card from "./Card";
import "./NavBar.css"
import "./Card.css"
import cardData from "./CardData";



function App() {
    const cardElements = cardData.map(card =>{
        return <Card img={card.img} title={card.title}  doclink = {card.doclink} date = {card.date} description = {card.description} />
    })
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
          <div className="card-holder">
              {cardElements}
          </div>


      </header>
    </div>
  );
}

export default App;
