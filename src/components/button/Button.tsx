import { FC } from 'react';
import styles from './Button.module.css'
interface IButtonProps {
    text: string
    disabled?: boolean,
    onClick: () => void
}

const Button: FC<IButtonProps> = ({ text, disabled, onClick }) => {
    return (
        <button className={styles.btn} disabled={disabled} onClick={onClick}>{text}</button>
    );
};

export default Button;
