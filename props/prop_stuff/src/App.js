import Card from "./card";
import cardData from "./cardData";

function App() {
    const cardElements = cardData.map(card =>{
        return <Card img = {card.img} name = {card.name} description ={card.description}/>
})
  return (
    <div>
        {cardElements}
    </div>
  );
}

export default App;



/*
<div className="card-container">
        <Card
            img = {Photo1}
            name = "Siamese Fighting Fish"
            description = "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam."
        />
        <Card
            img = {Photo2}
            name = "Red Light Bulb"
            description = "Red Light Bulbs For Sleep In fact, red light is frequently used in sleep therapy to help patients fall asleep and stay asleep for longer periods of time."
        />
        <Card
            img = {Photo3}
            name = "Branch with Green Leafs"
            description = " Simple leaves are one single lamina attached to the stem by a petiole; while a compound leaf has a lamina that is divided into smaller leaves called leaflets."
        />
        <Card
            img = {Photo4}
            name = "Bottle Corks"
            description = "Besides screw caps (made of metal and plastic), there are several 'fake' corks made from plastics to plant-based polymers."
        />

    </div>

 */
