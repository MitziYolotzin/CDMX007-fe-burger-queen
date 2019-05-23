import React, { useContext } from 'react';
import '../css/Ticket.css';
import globalContext from '../store/globalContext';

const TicketItems = () => {

    const { state: { cart } } = useContext(globalContext);
    console.log(cart)

    return (
        
<section className="row-ticket">
                    <aside className="ticketnav">
                        <ul className="ticketnav-menu">
                            <li className="nav-ticket">Cant.</li>
                            <li className="nav-ticket">Producto</li>
                            <li className="nav-ticket">Precio</li>
                        </ul>
                        <div className="select-product">
                            {cart.map((item) =>
                                <React.Fragment key={item.id}>
                                    
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                    <br />
                                    
                                </React.Fragment>
                            )}
                            </div>
                            
                            <div className="total-sum-ticket">$ {cart.reduce((prevValue, currentValue) => {
                    return prevValue + Number(currentValue.price);
                  }, 0.00)}</div>
                         
                     
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


                </section>

    );
};

export default TicketItems;