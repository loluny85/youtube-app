import styles from './Header.module.css'

const Header = () => {
    const { header } = styles
    return (
        <div className={header}>
            <h2>Youtube</h2>
        </div>
    );
};

export default Header;