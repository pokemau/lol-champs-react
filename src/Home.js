import JsonData from './assets/LOL_Info/Champ Info/championFull.json'

//components
import Champ from './Champ';

const Home = () => {
  const champData = JsonData.data


  return (
    <div className="body-container">
      <div className="left-container">
        <Champ champData={champData}/>
      </div>

      <div className="right-container">

      </div>
    </div>
  );
};

export default Home;