import React from "react";
import styles from "./Home.module.scss";
import SideBar from "../../components/SideBar/Sidebar"
function Home() {
  return (
    <div className={styles.main_container}>
      <SideBar />
      <div className={styles.home_container}>home container</div>
    </div>
  );
}

export default Home;
