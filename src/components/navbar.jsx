import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { getJwt } from "./Helpers/jwt";
import UnLoggedNav from "./unLoggedNavbar";
import LoggedNav from "./loggedNav";

function Navbar() {
  /*  const [token, setToken] = useState();

  let retrieved = localStorage.getItem("user");
  retrieved = JSON.parse(retrieved);

  const [user, setUser] = useState(retrieved);
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);
  const [loggedInNav, setloggedIn] = useState(false);

  let history = useHistory(); */

  /*   useEffect(() => {
    setToken(getJwt());
    Axios.get(`https://san-api.herokuapp.com/users/${user.user_id}`).then(
      (response) => {
        setUser(response.data);
        setGroup(response.data.group);
      }
    );
  }, []); */

  function logout() {
    localStorage.clear();
  }

  /* const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground); */

  return (
    <>
      <LoggedNav />
      {/* <UnLoggedNav /> */}
    </>
  );
}

export default Navbar;
