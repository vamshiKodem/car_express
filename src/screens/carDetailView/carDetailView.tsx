import React from "react";
import { useCarDetailView } from "./useCarDetailView";
import "./carDetailView.css";

import { FaSearch } from "react-icons/fa";
import { RadioButton } from "./common/radioButtons";
import { FloatingButton } from "./common/floatingButton";

export const CarDetailView = () => {
  const {
    selectedCity,
    setSelectedCity,
    carDetailView,
    searchInput,
    setSearchInput,
    showSearchResult,
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
    setTransmission,
    transmissionList,
  } = useCarDetailView();

  return (
    <div className="car-detail-container">
      <h5>{carDetailView.filter}</h5>
      <div>
        <label>{carDetailView.location}</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {carDetailView.showroomLocation.map((city: string) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>{carDetailView.bodyType}</label>
        <div className="input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={onSearchInputChange}
          />
        </div>
        {showSearchResult ? (
          <div className="search-container">
            {searchResult.map((item: string) => (
              <p
                className="search-list"
                onClick={() => onSearchResultClick(item)}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <label>{carDetailView.brand}</label>
        <div className="brand-container">
          {brandCheckBox.map((item) => (
            <div className="brand-list">
              <input
                key={item.id}
                type="checkbox"
                onClick={() => onBrandCheckBoxClick(item.id)}
                checked={item.isChecked}
              ></input>
              <label>{item.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label>{carDetailView.owner}</label>
        {carOwnerList.map((owner) => (
          <RadioButton
            key={owner.id}
            value={owner.value}
            name={carDetailView.owner}
            onChange={() => {
              setCarOwner(owner.value);
            }}
          />
        ))}
      </div>
      <div>
        <h6>{carDetailView.budget}</h6>
        {budgetButtons.map((budget) => (
          <FloatingButton
            name={budget.budget}
            onClick={() => setBudget(budget.budget)}
          />
        ))}
      </div>
      <div>
        <h6></h6>
        {fuelTypeList.map((fuelType) => (
          <RadioButton
            key={fuelType.id}
            value={fuelType.value}
            name={"fuelType"}
            onChange={() => setFuelType(fuelType.value)}
          />
        ))}
      </div>
      <div>
        <h6></h6>
        {transmissionList.map((type) => (
          <RadioButton
            key={type.id}
            value={type.value}
            name="transmission"
            onChange={() => setTransmission(type.value)}
          />
        ))}
      </div>
    </div>
  );
};
