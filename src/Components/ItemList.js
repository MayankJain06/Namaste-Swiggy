const ItemList = ({items}) =>{
    return (
        <div>
           { items.map((item) => (
            <div key={item.card.info}>
                <div>
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.price}</span>
                </div>
                <p>{item.card.info.description}</p>
            </div>
           )
           )}
      </div>
    )
        
    
    
};


export default ItemList;