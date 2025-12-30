import styles from '../app/app.module.css';
import '../app/reset.css'
import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import Main from "../components/content/profile";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}


export default App;
