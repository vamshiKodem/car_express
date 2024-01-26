import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useContentContext } from "../../context/contextContext";
import { CarDetail, CarList } from "../../models/home";
import { submit } from "../../reducer/carDetailReducer";

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

export const useHome = () => {
  const { homeContent } = useContentContext();
  const dispatch = useDispatch();
  const carDetailValue = useSelector((state: CarDetail) => state);
  // this is how we access the redux state

  const [showForm, setForm] = useState(false);
  const [carFormDetails, setCarFormDetails] = useState<CarDetail>(initialState);

  const onCarListClick = (car: CarList) => {
    setForm(true);
    setCarFormDetails((prev) => ({ ...prev, model: car.name }));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submit(carFormDetails));
  };

  const onChangeTextInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarFormDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return {
    homeContent,
    showForm,
    onCarListClick,
    onFormSubmit,
    carFormDetails,
    onChangeTextInputValue,
  };
};
