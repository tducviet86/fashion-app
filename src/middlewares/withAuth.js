import { useSelector } from "react-redux";

import Login from "../screen/Login/login.component";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useSelector((state) => state.auth);

    if (!token) {
      return <Login {...props} />;
    }
    return <WrappedCompnent {...props} />;
  };
};
export default withAuth;
