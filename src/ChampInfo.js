const ChampInfo = ({ indivData }) => {
  //basic stats
  const champId = indivData[1].id;
  const champStat = indivData[1].stats;
  const champName = indivData[1].name;
  const champTitle = indivData[1].title;
  //passive
  const passiveDesc = indivData[1].passive.description;

  console.log(indivData)
  return (
    <div className="champ-info-container">
      <img className="champ-loading-img" src={require(`./assets/LOL_Info/loading_images/${champId}_0.jpg`)} alt={champId} />
      <h1>{champName}</h1>
      <h3>{champTitle}</h3>
      <div className="champ-stats">
        <h1>{`HP: ${champStat.hp}`}</h1>
        <h1>{`MANA: ${champStat.mp}`}</h1>
        <h1>{`HP REGEN: ${champStat.hpregen}`}</h1>
        <h1>{`ARMOR: ${champStat.armor}`}</h1>
        <h1>{`MAGIC RESIST: ${champStat.spellblock}`}</h1>
      </div>

      <div className="champ-skills-container">
        <div className="passive">
          <img src={require(`./assets/LOL_Info/spell_images/passive/${indivData[1].passive.image.full}`)} alt="" />
          <p dangerouslySetInnerHTML={{__html: passiveDesc}}></p>
        </div>

        <div className="champ-skills">

        </div>
      </div>
    </div>
  );
};

export default ChampInfo;