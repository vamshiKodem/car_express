import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarDetail } from "../models/home";

const initialState: CarDetail = {
  color: "",
  externalFitments: "",
  insuranceValidUpto: "",
  kms: "",
  location: "",
  model: "",
  numberOfOwners: "",
  transmission: "",
  yearOfManufacture: "",
};

const counterSlice = createSlice({
  name: "careDetailForm",
  initialState,
  reducers: {
    submit: (state, carDetail: PayloadAction<CarDetail>) => {
      state.color = carDetail.payload.color;
      state.externalFitments = carDetail.payload.externalFitments;
      state.insuranceValidUpto = carDetail.payload.externalFitments;
      state.kms = carDetail.payload.kms;
      state.location = carDetail.payload.location;
      state.model = carDetail.payload.model;
      state.numberOfOwners = carDetail.payload.numberOfOwners;
      state.photo = carDetail.payload.photo;
      state.transmission = carDetail.payload.transmission;
      state.yearOfManufacture = carDetail.payload.yearOfManufacture;
      return state;
    },
  },
});

export const { submit } = counterSlice.actions;
export default counterSlice.reducer;
