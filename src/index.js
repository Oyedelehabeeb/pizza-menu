import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/* <Nums /> */}
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* <Pizza
        name="Pizza spinach"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizz Funghi "
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={15}
      /> */}
      {/* Rendering with && operator */}
      {/* {numPizza > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />

            // <Pizza
            //   name={pizza.name}
            //   photoName={pizza.photoName}
            //   ingredients={pizza.ingredients}
            //   price={pizza.price}
            // />
          ))}
        </ul>
      )} */}

      {/* Rendering with ternary operator */}
      {numPizza > 0 ? (
        <>
          <p>
            Authetic Italian Cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />

              // <Pizza
              //   name={pizza.name}
              //   photoName={pizza.photoName}
              //   ingredients={pizza.ingredients}
              //   price={pizza.price}
              // />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please try again later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>pizzaObj.price</span>}
      </div>
    </li>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", transform: "uppercase" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 21;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div>
      <p>We're open until {closeHour}</p>
      <button className="btn">Order</button>
    </div>
  );
}

// function Nums() {
//   const hour = new Date().getHours();
//   const isOp = 9;
//   const isCl = 20;
//   const opens = hour >= isOp && hour <= isCl;

//   return (
//     <div>
//       {opens ? <Num isCl={isCl} /> : <p>I am bamidele until {isOp}</p>}
//     </div>
//   );
// }

// function Num({ isCl }) {
//   return <h1>I am Habeeb until {isCl}</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
