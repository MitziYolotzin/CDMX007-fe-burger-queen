import React, { useContext, useState } from 'react';
import '../css/Navbar.css';
import globalContext from '../store/globalContext';

const TicketItems = ( ) => {
    
    const { state: { cart, cartDelete }, actions:{ deleteItem } } = useContext(globalContext);

    console.log(cart)
    console.log(cartDelete)
    
    const [activeb, setActiveb] = useState(false);

    const deleteItemTicketList = item => {
          deleteItem(item)
      };

    const handleClickb = (id) => {
        // function that will update the state values
        deleteItemTicketList(id);
        // change the state they have initially active
            setActiveb(!activeb);
          }

    return (
        

                    <aside className="ticketnav">
                        <ul className="ticketnav-menu">
                            <li className="nav-ticket">Cant.</li>
                            <li className="nav-ticket">Producto</li>
                            <li className="nav-ticket">Precio</li>
                        </ul>
                        <div className="select-product">
                            {cart.map((item) =>
                                <React.Fragment>
                                    <div key={item.id} className="boxed-ticket-product"  onClick={handleClickb }>
                                    
                                        <li className="list-ticket-product">{item.name}</li>
                                        <li className="list-ticket-product">$ {item.price}</li>
                                        {activeb && 
        console.log ('botonticket')
        
        }                          
        
                                    {/* <br /> */}
                                    </div>
                                </React.Fragment>
                            )}
                            </div>
                            
                            <div className="total-sum-ticket">$ {cart.reduce((prevValue, currentValue) => {
                    return prevValue + currentValue.price;
                  }, 0)}</div>
                         
                     
                        {/* <section className="select-button-ticket">
                            <section className="button-cancel">
                                <div className="cancel">Cancelar orden</div>
                            </section>
                            <section className="button-confirm">
                                <div className="confirm">Confirmar orden</div>
                            </section>
                            <div className="total">Total</div>
                        </section> */}
                    </aside>


                

    );
};

export default TicketItems;