import { useSelector } from "react-redux";
import { CarDetail } from "../../models/home";
import { useContentContext } from "../../context/contextContext";
import { useMemo, useState } from "react";
import {
  BrandCheckboxItem,
  BudgetList,
  RadioButtonsProps,
} from "../../models/carDetailView";

const initialCheckboxes: BrandCheckboxItem[] = [
  { id: 1, label: "Wagner", isChecked: false },
  { id: 2, label: "Swift", isChecked: false },
  { id: 3, label: "Celerio", isChecked: false },
  { id: 4, label: "Swift Dizer", isChecked: false },
];

const carOwnerList: RadioButtonsProps[] = [
  { id: 1, value: "1st Owner" },
  { id: 2, value: "2nd Owner" },
  { id: 3, value: "3rd Owner" },
];

const fuelTypeList: RadioButtonsProps[] = [
  { id: 1, value: "Petrol" },
  { id: 2, value: "Diesel" },
  { id: 3, value: "CNG" },
];

const budgetButtons: BudgetList[] = [
  { id: 1, budget: "Less than 2L" },
  { id: 2, budget: "2L - 4L" },
  { id: 3, budget: "4L - 6L" },
  { id: 4, budget: "More than 6L" },
];

const transmissionList: RadioButtonsProps[] = [
  { id: 1, value: "Automatic" },
  { id: 2, value: "Manual" },
];

export const useCarDetailView = () => {
  const carDetailValue = useSelector((state: CarDetail) => state);

  const { carDetailView } = useContentContext();
  const [selectedCity, setSelectedCity] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(true);
  const [brandCheckBox, setBrandCheckBox] = useState(initialCheckboxes);
  const [carOwner, setCarOwner] = useState(carOwnerList[0].value);
  const [budget, setBudget] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");

  const searchResult = useMemo(() => {
    return carDetailView.bodyTypeList.filter((data: string) =>
      data.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput]);

  const onSearchResultClick = (value: string) => {
    setSearchInput(value);
    setShowSearchResult(false);
  };

  const onBrandCheckBoxClick = (id: number) => {
    setBrandCheckBox(() =>
      brandCheckBox.map((box) => {
        if (box.id === id) {
          return { ...box, isChecked: !box.isChecked };
        }
        return box;
      })
    );
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput((prev) => {
      if (!prev) {
        setShowSearchResult(true);
      }
      return e.target.value;
    });
  };

  return {
    selectedCity,
    carDetailView,
    setSelectedCity,
    searchInput,
    setSearchInput,
    showSearchResult,
    setShowSearchResult,
    searchResult,
    onSearchResultClick,
    onBrandCheckBoxClick,
    brandCheckBox,
    onSearchInputChange,
    carOwner,
    carOwnerList,
    setCarOwner,
    budgetButtons,
    setBudget,
    fuelTypeList,
    setFuelType,
    transmissionList,
    setTransmission,
  };
};
