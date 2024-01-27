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
    carDetailViewContent,
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
      <h5>{carDetailViewContent.filter}</h5>
      <div className="car-detail-section">
        <label>{carDetailViewContent.location}</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {carDetailViewContent.showroomLocation.map((city: string) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="car-detail-section">
        <label>{carDetailViewContent.bodyType}</label>
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
      <div className="car-detail-section">
        <label>{carDetailViewContent.brand}</label>
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
      <div className="car-detail-section">
        <label>{carDetailViewContent.owner}</label>
        {carOwnerList.map((owner) => (
          <RadioButton
            key={owner.id}
            value={owner.value}
            name={carDetailViewContent.owner}
            onChange={() => {
              setCarOwner(owner.value);
            }}
          />
        ))}
      </div>
      <div className="car-detail-section">
        <h6> {carDetailViewContent.budget}</h6>
        <div className="floating-button-container">
          {budgetButtons.map((budget) => (
            <FloatingButton
              name={budget.budget}
              onClick={() => setBudget(budget.budget)}
            />
          ))}
        </div>
      </div>
      <div className="car-detail-section">
        <h6>{carDetailViewContent.fuelType}</h6>
        {fuelTypeList.map((fuelType) => (
          <RadioButton
            key={fuelType.id}
            value={fuelType.value}
            name={"fuelType"}
            onChange={() => setFuelType(fuelType.value)}
          />
        ))}
      </div>
      <div className="car-detail-section">
        <h6>{carDetailViewContent.transmission}</h6>
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
