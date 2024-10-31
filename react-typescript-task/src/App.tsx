import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter, VehicleType } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import { VehicleTypeSelect } from "./components/VehicleTypeSelect";

const initialFilter: VehicleFilter = {
  title: "",
  type: null
};

export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [searchFilterTitle, setSearchFilterTitle] = useState<string>("");
  const [searchFilterType, setSearchFilterType] = useState<VehicleType|null>(null);

  useEffect(() => {
    console.log(searchFilterTitle);
    initialFilter.title = searchFilterTitle;
    initialFilter.type = searchFilterType;
    const data = VehicleApi.search(initialFilter);
    setVehicles(data);
    console.log(data);
  }, [searchFilterTitle,searchFilterType]);

  return (
    <>
      <Filter setSearchFilterTitle={setSearchFilterTitle} setSearchFilterType={setSearchFilterType} searchFilterType={searchFilterType} />

      <Table vehicles={vehicles} />
    </>
  );
}
