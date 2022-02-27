import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import ListingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "حداقل یک عکس بارگذاری کنید.").label("Images"),
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

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await ListingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) return alert("Could not save the listing");

    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
    paddingHorizontal: 5,
  },
});
export default ListingEditScreen;
