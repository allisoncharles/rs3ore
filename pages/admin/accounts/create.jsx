import NavbarAd from "../../../components/NavbarAd";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CreateAccount from "../../../components/CreateAccount";
import { useRef, useEffect } from "react";
import styles from "../../../styles/AccountCreate.module.css";
import { useSession } from "next-auth/react";
import Router from "next/router";

export default function AccountCreate() {
  const menuRef = useRef();
  const navbarRef = useRef();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/admin");
  }, [status]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        menuRef.current.style.visibility = "visible";
        navbarRef.current.style.display = "none";
      }
    }

    if (window.innerWidth < 871) {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [navbarRef]);

  const adminNavToggle = () => {
    menuRef.current.style.visibility = "hidden";
    navbarRef.current.style.display = "block";
  };

  return (
    <div className={styles.account__create}>
      <Navbar />
      <div className="global__container">
        <div className="admin__wrapper">
          <svg
            onClick={adminNavToggle}
            ref={menuRef}
            className="admin__menu__icon"
          >
            <use xlinkHref="/svg/menu.svg#menu"></use>
          </svg>

          <div ref={navbarRef} className="admin__navbar">
            <NavbarAd />
          </div>
          <div className="component__wrapper">
            <CreateAccount />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
