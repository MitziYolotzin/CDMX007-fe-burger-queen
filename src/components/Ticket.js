import React, { useContext} from 'react';
import '../css/Navbar.css';
import globalContext from '../store/globalContext';

const TicketItems = ({ img, name, price, quantity, icdel, id} ) => {
    
    const { state: { cart }, actions:{deleteAllItems, deleteItem}} = useContext(globalContext);

    console.log(cart)
  
    
    const deleteTicketList = (item) => {
        deleteAllItems(item)
    }
   

    return (
        

                    <aside className="ticketnav">
                        
                        <ul className="ticketnav-menu">
                            <li className="nav-ticket">Cant.</li>
                            <li className="nav-ticket">Producto</li>
                            <li className="nav-ticket">Precio</li>
                        </ul>
                       
                        <div className="select-product">
                        
                            {cart.map((cart, item) =>
                                <React.Fragment>
                                    <div key={item} className="boxed-ticket-product" >
                                    
                                       
                                        <div className="list-name-product">{cart.name}</div>
                                        <div className="list-price-product">$ {cart.price}</div>
                                        <div className="list-cant-product">{cart.quantity}</div>
                                        
                                        
        
      <div className="deleteItem" onClick={() => deleteItem({img, name, price, quantity, icdel, id})}>
          {/* <div className="circle-icon-ticket"></div> */}
          <img className="image-icon-ticket" src={cart.icdel} alt="imageicon" />
          </div>
              
        
                                    {/* <br /> */}
                                    </div>
                                </React.Fragment>
                            )}
                            
                            </div>
                            
                            <div className="total-sum-ticket">Total $ {cart.reduce((prevValue, currentValue) => {
                    return prevValue + currentValue.price;
                  }, 0)}</div>
                         
                     
                        <div className="select-button-ticket">
                            <div className="button-cancel" onClick={() => deleteTicketList({img, name, price, quantity, icdel, id})} >
                                <div className="cancel">Cancelar orden</div>
                            </div>
                            <div className="button-confirm">
                                <div className="confirm">Confirmar orden</div>
                            </div>
                            
                        </div>
                    </aside>


                

    );
};

export default TicketItems;