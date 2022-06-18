import styles from './Sidebar.module.scss';
import logo from '../../assets/logo.png'
function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.top}>
        <span><img className={styles.logo} src={logo} alt='App logo' /></span>
        <span className={styles.logo_name}>Nexus Admin</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
        <li>Dashboard</li>
        <li>Dashboard</li>
        <li>Dashboard</li>
        </ul>
      </div>
      <div className={styles.bottom}>options and logout</div>
    </div>
  )
}

export default Sidebar