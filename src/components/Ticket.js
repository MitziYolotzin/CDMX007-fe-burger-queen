import React, { useContext} from 'react';
import '../css/Navbar.css';
import globalContext from '../store/globalContext';

const TicketItems = ( ) => {
    
    const { state: { cart }} = useContext(globalContext);

    console.log(cart)
  
    
    /*const deleteItemTicketList = item => {
        deleteItem(item)
    };*/


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
                                    <div key={item.id} className="boxed-ticket-product" >
                                    
                                       
                                        <div className="list-name-product">{item.name}</div>
                                        <div className="list-price-product">$ {item.price}</div>
                                        <div className="list-cant-product"> 1 </div>
                                        <div className="list-delete-product"> {item.icdel}</div>                         
        
                                    {/* <br /> */}
                                    </div>
                                </React.Fragment>
                            )}
                            </div>
                            
                            <div className="total-sum-ticket">Total $ {cart.reduce((prevValue, currentValue) => {
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