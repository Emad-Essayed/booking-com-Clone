import { useState } from "react";

const useSearch = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  //   const resetInputField = () => setValue(initialValue);

  const bindInputFiled = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bindInputFiled];
};

export default useSearch;
