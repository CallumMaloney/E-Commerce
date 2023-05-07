import Card from "./Card";
import "./CardCollection.css";

function CardCollection({ myStoreData, setFilteredStoreData, inputValue, toggleCartItem, shoppingCartItems}) {

    const filteredData = myStoreData && myStoreData.filter(item => // if myStoreData is truthy, then filter it:
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );


  return (
    <div className="card-collection">
      {filteredData && // if myStoreData is truthy, then render the following:
        filteredData.map((item) => {
          return ( 
            <Card 
              key={item.id}
              category={item.category}
              title={item.title}
              imageSrc={item.image}
              rating={item.rating.rate}
              price={item.price}
              toggleCartItem={toggleCartItem}
              shoppingCartItems={shoppingCartItems}
            />
          );
        })}
    </div>
  );
}

export default CardCollection;
