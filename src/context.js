import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useWindowDimensions from "./hooks/useWindowDimensions";

const initEndDate = new Date();
initEndDate.setDate(initEndDate.getDate() + 1);

export const LclStoSearchContext = createContext({});
export const MediaScreenContext = createContext();
export const InputsSearch = createContext();

export const Provider = ({ children }) => {
  const [lclStorageSearch, setLclStorageSearch] = useLocalStorage(
    "searchHistory",
    []
  );

  const { width } = useWindowDimensions();
  const isTabletOrMobile = width < 1200 ? true : false;

  const [destination, setDestination] = useState(null);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: initEndDate,
    key: "selection",
    isDefaultDate: true,
  });
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [extraOptions, setExtraOptions] = useState({
    isWork: false,
    isApartment: false,
  });

  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    if (lclStorageSearch.length) {
      const {
        destination,
        dates,
        options,
        extraOptions: { isWork, isApartment },
      } = lclStorageSearch[lclStorageSearch.length - 1];

      let newSearchDate = {
        ...dates,
        startDate: new Date(dates.startDate),
        endDate: new Date(dates.endDate),
      };

      setDestination(destination);
      setDates(newSearchDate);
      setOptions(options);
      setExtraOptions({ isWork, isApartment });
    }
  }, [lclStorageSearch]);

  return (
    <MediaScreenContext.Provider value={{ isTabletOrMobile }}>
      <LclStoSearchContext.Provider
        value={{ lclStorageSearch, setLclStorageSearch }}
      >
        <InputsSearch.Provider
          value={{
            destination,
            setDestination,
            dates,
            setDates,
            options,
            setOptions,
            extraOptions,
            setExtraOptions,
            pageNo,
            setPageNo,
          }}
        >
          {children}
        </InputsSearch.Provider>
      </LclStoSearchContext.Provider>
    </MediaScreenContext.Provider>
  );
};
