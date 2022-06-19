import styles from "./Sidebar.module.scss";
import logo from "../../assets/logo.png";
import { Dashboard } from "@mui/icons-material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.top}>
        <span>
          <img className={styles.logo} src={logo} alt="App logo" />
        </span>
        <span className={styles.logo_name}>Nexus Admin</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <Dashboard className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>
          <li>
            <StoreMallDirectoryRoundedIcon className={styles.icon} />
            <span>Products</span>
          </li>
          <li>
            <PeopleAltRoundedIcon className={styles.icon} />
            <span>Users</span>
          </li>
          <li>
            <ReceiptRoundedIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>MISC</p>
          <li>
            <BarChartRoundedIcon className={styles.icon} />
            <span>Statistics</span>
          </li>
          <li>
            <NotificationsRoundedIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SYS/ADMIN</p>
          <li>
            <AccountCircleRoundedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <TuneRoundedIcon className={styles.icon} />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
      <p className={styles.title}>CHOOSE THEME</p>
        <div className={styles.color_option}></div>
        <div className={styles.color_option}></div>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.logout_container}>
          <PowerSettingsNewOutlinedIcon className={styles.icon} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
