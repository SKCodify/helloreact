const ResCard = (props) => {
  let cuisine = "";
  const { resObj } = props;
  console.log("fdjfld", resObj);
  const name = resObj.info.name;
  const imgUrl = resObj.info.image.url;
  if (resObj.info.cuisine) {
    cuisine = resObj.info.cuisine
      .map((ele) => {
        return ele.name;
      })
      .join(", ");
  }
  const rating = resObj.info.rating ? resObj.info.rating.text : "";
  const address = resObj.info.locality ? resObj.info.locality.name : "";
  return (
    <div className="res-card">
      <img className="res-img" src={imgUrl}></img>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating} rating</h5>
      <h5>{address}</h5>
    </div>
  );
};
export default ResCard;
