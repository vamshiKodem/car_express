import React, { ChangeEventHandler } from "react";

export const RadioButton: React.FC<{
  value: string;
  name: string;
  onChange: (value: string) => void;
}> = ({ value, name, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={() => onChange(value)}
      />
      {value}
    </label>
  );
};
