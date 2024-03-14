import { FC, ReactElement, FormEvent, ChangeEvent } from "react";
import { INPUT_PLACEHOLDER } from "./helpers/consts";

import "./Controls.scss";
import { ALL } from "src/components/entities/page/helpers/consts";

type ControlsPropsTypes = {
  options: string[];
  filterOptions: string[];
  handleInput: (e: FormEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Controls: FC<ControlsPropsTypes> = ({
  options,
  filterOptions,
  handleInput,
  handleChange,
  handleFilter,
}): ReactElement => (
  <div className="controls">
    <input
      type="text"
      placeholder={INPUT_PLACEHOLDER}
      onInput={(e: FormEvent<HTMLInputElement>) => handleInput(e)}
    />
    <select
      name="status"
      onChange={(e) => {
        handleChange(e);
      }}
    >
      {options.map((item) => (
        <option key={item} value={item} selected={item===ALL}>
          {item}
        </option>
      ))}
    </select>
    <select
      name="filterOptions"
      onChange={(e) => {
        handleFilter(e);
      }}
    >
      {filterOptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);
