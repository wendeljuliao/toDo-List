import styles from "./Input.module.css";
import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}

export function Input({
  type,
  placeholder,
  description,
  setDescription,
}: IInputProps) {
  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={description}
      onChange={handleNewTaskChange}
    />
  );
}
