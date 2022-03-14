import React, { useState, useEffect } from "react";
import { Field } from "formik";
import styles from "../../styles/input-field.module.css";
import { MdError } from "react-icons/md";

const InputField = ({ id, placeholder, error, errorMsg, type, disabled }) => {

  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(e => {
      if (e.value != '') {
        e.classList.add('bg-white');
        e.classList.remove('bg-transparent');
      } else {
        e.classList.add('bg-transparent');
        e.classList.remove('bg-white');
      }
    })
  })

  return (
    <div className={styles.container}>

      {error ? (
        <p className={styles.errortext}>{errorMsg}</p>
      ) : (
        <p className={styles.fill} aria-hidden="true">
          fill
        </p>
      )}
      <div
        className={`relative border-b-2 border-[#BFC6E0] w-full ${error ? styles.errorfield : ""}`}
      >
        <Field
          id={id}
          name={id}
          placeholder={placeholder}
          className='bg-transparent input pl-3  py-2 placeholder-[#C1C8E1] w-full  outline-none'
          type={type}
          disabled={disabled}

        />
        {error && <MdError className='absolute text-rose-500 right-2 top-3' />}
      </div>
    </div>
  );
};

export default InputField;
