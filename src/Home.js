import JsonData from './assets/LOL_Info/champ_info/championFull.json'

import { useState } from 'react';

//components
import Champ from './Champ';
import ChampInfo from './ChampInfo';

const Home = () => {
  const champData = JsonData.data;

  //current champion clicked
  const [indivData, setIndivData] = useState();

  return (
    <div className="body-container">
      <div className="left-container">
        <Champ champData={champData} setIndivData={setIndivData}/>
      </div>

      <div className="right-container">
        {indivData && <ChampInfo indivData={indivData}/>}
      </div>
    </div>
  );
};

export default Home;