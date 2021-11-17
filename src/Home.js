import React from 'react';

function getYear() {
    return new Date().getFullYear();
}

function Home() {
 
    return (
        <div>
            <h1 className="">Thanksgiving {new Date().getFullYear()}</h1>
            <img src="https://cdn.pixabay.com/photo/2012/04/01/16/38/turkey-23435_1280.png" className="home-turkey"/>
        </div>
    );
  }
  
  export default Home;