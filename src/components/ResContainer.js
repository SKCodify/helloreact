import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const ResContainer = (props) => {
  const { list } = props;
  console.log(list);
  return (
    <div className="flex flex-wrap">
      {list.map((ele) => {
        return (
          <Link
            className="linker"
            to={"/resdetail/" + ele.entityId}
            key={ele.entityId}
          >
            <ResCard resObj={ele} />
          </Link>
        );
      })}
    </div>
  );
};

export default ResContainer;
