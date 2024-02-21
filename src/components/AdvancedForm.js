import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { advancedSchema } from "../schema";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
  console.log("Values and Actions", values, actions);
  console.log("Submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="username"
            name="username"
            type="text"
            placeholder="Enter Your Username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="please select a job"
          >
            <option value="">Please select a Job Type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
