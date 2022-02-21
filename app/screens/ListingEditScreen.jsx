import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "table-furniture",
  },
  { label: "Cars", value: 2, backgroundColor: "green", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "yellow", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "blue", icon: "gamepad-square" },
  { label: "Clothing", value: 5, backgroundColor: "blue", icon: "tshirt-crew" },
  { label: "Sports", value: 6, backgroundColor: "dodgerblue", icon: "menu" },
  { label: "Movies", value: 7, backgroundColor: "blue", icon: "menu" },
  { label: "Books", value: 8, backgroundColor: "blue", icon: "menu" },
  { label: "Other", value: 9, backgroundColor: "blue", icon: "menu" },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Descreiption"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
