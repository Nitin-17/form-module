import React from "react";
import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("Meta...", meta);
  console.log("Field...", field);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms & conditions</span>
        {meta.touched && meta.error && <p className="error">{meta.error}</p>}
      </div>
    </>
  );
};

export default CustomCheckbox;
