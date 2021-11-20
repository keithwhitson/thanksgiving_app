import React from 'react';

const History = () => {
  return(
    <>
    <p className="thanksgiving-history">Thanksgiving is a national holiday celebrated on various dates in the United States, Canada, 
      Grenada, Saint Lucia, and Liberia. It began as a day of giving thanks and sacrifice for the 
      blessing of the harvest and of the preceding year. Similarly named festival holidays occur in 
      Germany and Japan. Thanksgiving is celebrated on the second Monday of October in Canada and on 
      the fourth Thursday of November in the United States and around the same part of the year in 
      other places. Although Thanksgiving has historical roots in religious and cultural traditions, 
      it has long been celebrated as a secular holiday as well.
    </p>
    <p className="wiki-credit">
      This article uses material from the Wikipedia article <a href="https://en.wikipedia.org/wiki/Thanksgiving" target="_blank">"Thanksgiving"</a>, which is released under the <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share-Alike License 3.0</a>.
    </p>
    </>
  );
  }

const Home = () => {
      return(
        <div>
            <h1 className="home-headline">Thanksgiving {new Date().getFullYear()}</h1>
            <img alt="" src="https://cdn.pixabay.com/photo/2012/04/01/16/38/turkey-23435_1280.png" className="home-turkey"/>
            <History />
        </div>
      );
  }


  
  export default Home;