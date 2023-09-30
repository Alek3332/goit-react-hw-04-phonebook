export const Filter = ({ filter, onChangeValue }) => (
  <>
    <p>Find Contact</p>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChangeValue}
    ></input>
  </>
);