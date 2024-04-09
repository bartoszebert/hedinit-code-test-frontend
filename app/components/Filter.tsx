import { ChangeEventHandler } from "react";

interface IFilterProps {
  handleFilterChange: ChangeEventHandler<HTMLSelectElement>;
}

const Filter = ({ handleFilterChange }: IFilterProps): JSX.Element => {
  return (
    <div className="mb-3">
      <label>Filter:</label>

      <select name="carType" className="ml-2 p-1" onChange={handleFilterChange}>
        <option>-- Select Filter -- </option>
        <option value="PB">PB</option>
        <option value="SU">SU</option>
      </select>
    </div>
  );
};

export default Filter;
