import { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Proptypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import Dialog from "../components/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog");
    let shouldShowDialog = true;

    if (dialogStatus !== null) {
      try {
        shouldShowDialog = JSON.parse(dialogStatus);
      } catch (error) {
        console.error("Dialog status parse error:", error);
        shouldShowDialog = true;
      }
    } else {
      localStorage.setItem("dialog", JSON.stringify(true));
    }

    setTimeout(() => {
      setIsDialogShow(shouldShowDialog);
    }, 2000);
  }, []);

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
