import styles from './perfil.module.css';

export default ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
};