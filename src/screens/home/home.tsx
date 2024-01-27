import "./home.css";
import { useHome } from "./useHome";
import { CarList } from "../../models/home";

export const Home = () => {
  const {
    homeContent,
    onCarListClick,
    showForm,
    onFormSubmit,
    carFormDetails,
    onChangeTextInputValue,
    carDetailValue,
  } = useHome();

  return (
    <div className="container">
      <div className="home-container">
        {homeContent.carCompanies.map((car: CarList) => (
          <div
            key={car.id}
            className="car-container"
            onClick={() => onCarListClick(car)}
          >
            <img src={car.image} className="car-image" />
            <h3>{car.name}</h3>
          </div>
        ))}
      </div>
      {showForm ? (
        <>
          <form className="form-container">
            <div className="form-section">
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                disabled
                type="text"
                name={homeContent.inputNames.model}
                placeholder={homeContent.inputPlaceholders.model}
                value={carFormDetails.model}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.color}
                name={homeContent.inputNames.color}
                placeholder={homeContent.inputPlaceholders.color}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.yearOfManufacture}
                name={homeContent.inputNames.yearOfManufacture}
                placeholder={homeContent.inputPlaceholders.yearOfManufacture}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.insuranceValidUpto}
                name={homeContent.inputNames.insuranceValidUpto}
                placeholder={homeContent.inputPlaceholders.insuranceValidUpto}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.kms}
                name={homeContent.inputNames.kms}
                placeholder={homeContent.inputPlaceholders.kms}
              />
            </div>
            <div className="form-section padding-left">
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.location}
                name={homeContent.inputNames.location}
                placeholder={homeContent.inputPlaceholders.location}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.numberOfOwners}
                name={homeContent.inputNames.numberOfOwners}
                placeholder={homeContent.inputPlaceholders.numberOfOwners}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.transmission}
                name={homeContent.inputNames.transmission}
                placeholder={homeContent.inputPlaceholders.transmission}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="text"
                value={carFormDetails.externalFitments}
                name={homeContent.inputNames.externalFitments}
                placeholder={homeContent.inputPlaceholders.externalFitments}
              />
              <input
                className="form-input"
                onChange={onChangeTextInputValue}
                type="file"
                // value={carFormDetails.photo}
                // here i am adding img url instead of file
                name={homeContent.inputNames.photo}
                placeholder={homeContent.inputPlaceholders.photo}
              />
            </div>
          </form>
          <button type="submit" onClick={onFormSubmit}>
            {homeContent.submit}
          </button>
        </>
      ) : null}
    </div>
  );
};
