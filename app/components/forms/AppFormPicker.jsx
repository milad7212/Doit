import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import { ErrorMessage } from ".";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent, 
  width,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
