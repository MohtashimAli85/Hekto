import React, { useState } from "react";
import { Field } from "formik";
import styles from "../../styles/input-field.module.css";
import { MdError } from "react-icons/md";

const InputField = ({ id, placeholder, error, errorMsg, type, disabled }) => {
  const [value, setValue] = useState('');
  const [err, setErr] = useState(false);
  const inputHandler = (e) => {
    setValue(e.target.value);
    const val = e.target.value;
    const classList = e.target.classList;
    if (val != '') {

      if (classList.contains('bg-transparent')) {
        classList.add('bg-white');
        classList.remove('bg-transparent');
      }
      setErr(false);

    } else {
      if (classList.contains('bg-white')) {
        classList.add('bg-transparent');
        classList.remove('bg-white');
      }
      setErr(true);

    }

  }
  return (
    <div className={styles.container}>
      {err ? (
        <p className={styles.errortext}>{errorMsg}</p>
      ) : (
        <p className={styles.fill} aria-hidden="true">
          fill
        </p>
      )}
      <div
        className={`relative border-b-2 border-[#BFC6E0] w-full ${err ? styles.errorfield : ""}`}
      >
        <Field
          id={id}
          name={id}
          placeholder={placeholder}
          className='bg-transparent  pl-3  py-2 placeholder-[#C1C8E1] w-full  outline-none'
          type={type}
          disabled={disabled}
          onChange={inputHandler}
          value={value}
        />
        {err && <MdError className='absolute text-rose-500 right-2 top-3' />}
      </div>
    </div>
  );
};

export default InputField;
