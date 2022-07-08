import styles from "./Input.module.css";
import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ type, placeholder }: IInputProps) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
}
