import styles from "./header.module.css"
//jsx файл - то же самое, что кусок html'я файл. мы подключаем к этому куску html'я стили
//таким образом разным элементам кусков html'я можно давать одинаковые классы и они будут работать только в этом файле
function Header() {
    return (
        <header className={styles.header}>
            <figure>
                <img className={styles.logo} src="./src/assets/images/logo2.png" alt="logo" />
            </figure>
        </header>
    )
}
export default Header