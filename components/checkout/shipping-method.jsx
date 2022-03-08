import React from "react";
import styles from "../../styles/shipping-method.module.css";
import { formatPrice } from "../../utils/helper-functions";

const ShippingMethod = ({ handleOption, option, chosen }) => {
  const border = 'border-pink';
  return (
    <div
      className={` border  ${styles.shippingOption} ${option.id === chosen?.id ? border : ""
        } `}
      onClick={() => handleOption(option)}
      role="button"
      tabIndex="0"
    >
      <p>{option.name}</p>
      <p>{formatPrice(option.amount, "EUR")}</p>
    </div>
  );
};

export default ShippingMethod;
