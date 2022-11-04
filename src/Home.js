import JsonData from './assets/dragontail-12.21.1/ChampInfo/championFull.json'

const Home = () => {
  const champData = JsonData.data

  console.log(champData)

  return (
    <div className="body-container">
      <div className="left-container">
        
      </div>

      <div className="right-container">

      </div>
    </div>
  );
};

export default Home;