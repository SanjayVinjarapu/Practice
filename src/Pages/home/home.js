import React from 'react';
import './home.css'

const dresses = [
  {
    id: 1,
    title: 'Elegant Evening Dress',
    price: 'Rs. 999',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 2,
    title: 'Floral Summer Dress',
    price: 'Rs.1499',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 3,
    title: 'New Dress',
    price: 'Rs.499',
    product_type: 'Saree', 
    imageUrl: 'https://img.freepik.com/free-photo/smiling-beautiful-young-woman-pink-mini-dress-posing-studio_155003-14602.jpg',
  },
  {
    id: 4,
    title: 'Elegant Evening Dress',
    price: 'Rs. 999',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 5,
    title: 'Floral Summer Dress',
    price: 'Rs.1499',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 6,
    title: 'New Dress',
    price: 'Rs.499',
    product_type: 'Saree', 
    imageUrl: 'https://img.freepik.com/free-photo/smiling-beautiful-young-woman-pink-mini-dress-posing-studio_155003-14602.jpg',
  },
  {
    id: 7,
    title: 'Elegant Evening Dress',
    price: 'Rs. 999',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 8,
    title: 'Floral Summer Dress',
    price: 'Rs.1499',
    product_type: 'Saree', 
    imageUrl: 'https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.webp?b=1&s=170667a&w=0&k=20&c=e8QIDlkmTS4UZ91ZTSS2pEQrzN79G0jqI6BimNtv0RA=',
  },
  {
    id: 9,
    title: 'New Dress',
    price: 'Rs.499',
    product_type: 'Saree',
    imageUrl: 'https://img.freepik.com/free-photo/smiling-beautiful-young-woman-pink-mini-dress-posing-studio_155003-14602.jpg',
  },
  // Add more dress items here
];

const DressList = () => {
  let types= new Set();
  for(let ele in dresses){
    types.add(dresses[ele].product_type);
  }
  console.log(types)
  const setToArray = Array.from(types);
  return (
    <React.Fragment>
        {setToArray.map(type=>(
          <React.Fragment>
          <h2 className="mb-4">{type}</h2>
          <div className="row">
            {dresses.map((dress) => {
              if(dress.product_type == type){
                return (
                    <div key={dress.id} className="col product">
                      <div className="card">
                        <img src={dress.imageUrl} alt={dress.title} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{dress.title}</h5>
                          <p className="card-text">{dress.price}</p>
                        </div>
                      </div>
                    </div>
                )
              }  
            }        
            )}
          </div>
        </React.Fragment>
        ))}
    </React.Fragment>
    
  );
};

export default DressList;
