import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import Foorter from "../components/footer";
import { fetchHotels } from "../features/hotel/hotelsSlice";

const ListPropertiesPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const destinationId = searchParams.get("destinationId");

  useEffect(() => {
    dispatch(fetchHotels(destinationId));
  }, [destinationId, dispatch]);
  return (
    <>
      <Outlet />
      <Foorter />
    </>
  );
};

export default ListPropertiesPage;
