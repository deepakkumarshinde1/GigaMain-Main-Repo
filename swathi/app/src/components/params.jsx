import { useParams } from "react-router-dom";
const params = (Comp) => {
  return (props) => {
    let param = useParams();
    return <Comp {...props} param={param} />;
  };
};

export default params;
