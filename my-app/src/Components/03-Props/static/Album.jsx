import data from "./Photos.json";
import SinglePhoto from "./SinglePhoto";

const Album = () => {
  return (
      <div className="container">

    <div className="row">
      {data.map((item) => (
          <SinglePhoto key={item.id} item={item} />
          ))}
    </div>
          </div>
  );
};

export default Album;
