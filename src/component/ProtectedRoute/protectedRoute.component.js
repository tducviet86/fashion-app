import { useSelector } from "react-redux";
import Login from "../../screen/Login/login.component";

const ProtectedScreen = ({ component }) => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <Login />;
  }

  return component;
};
export default ProtectedScreen;
