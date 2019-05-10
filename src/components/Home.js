// import React from 'react';

// const Home = () => {
//     return(
// <div>
//     <p>Home</p>
// </div>

//     );
// };

// export default Home;

import React from 'react';

const Home = (props) => {
    return (
        <div className="main-content">
            <div className="container">
                <h2>{props.title}</h2>
                <div className="home-image"></div>
                <div className="thumbnail-container">
                    <div className="home-thumbnail-1"></div>
                    
                </div>
            </div>
        </div> 
    );
}

export default Home;