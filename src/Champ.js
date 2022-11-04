const Champ = ({ champData }) => {
  const click = (champ) =>{
    console.log(champ[1].name)
  }

  return (
    <div className="champs">
      {Object.entries(champData).map(champ => (
        <div className="champ-cont" key={champ[1].key}>
          <img onClick={() => click(champ)}  className="champ-tile" src={require(`./assets/LOL_Info/champ_tile/${champ[1].image.full}`)} alt={champ[1].id} />
        </div>
      ))}
    </div>
  );
};

export default Champ;