import Header from '../header/Header'
import styles from './BaseLayout.module.css'

const BaseLayout = ({ children }) => {
    const {bodyStyle} = styles;
    return (
        <div>
            <Header />
            <div className={bodyStyle}>{children}</div>
        </div>
    );
};

export default BaseLayout;