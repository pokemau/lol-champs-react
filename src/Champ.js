const Champ = ({ champData, setIndivData }) => {
  
  const setCurrentChamp = (champ) => {
    setIndivData(champ)
  }

  return (
    <div className="champs">
      {Object.entries(champData).map(champ => (
        <div className="champ-cont" key={champ[1].key}>
          <img onClick={() => setCurrentChamp(champ)}  className="champ-tile" src={require(`./assets/LOL_Info/champ_tile/${champ[1].image.full}`)} alt={champ[1].id} />
        </div>
      ))}
    </div>
  );
};

export default Champ;