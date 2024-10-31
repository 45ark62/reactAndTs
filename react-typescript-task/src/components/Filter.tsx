import React, { useState, useEffect } from "react";
import { VehicleApi } from "../data/vehicles/api";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleType } from "../data/vehicles/contracts";
interface SFilter {
  setSearchFilterTitle: (value: string) => void
  setSearchFilterType:(value: VehicleType|null) => void
  searchFilterType:VehicleType|null
}

export class Filter extends React.Component<SFilter> {
  render(): React.ReactNode {
    return (
      <>
        <input
          type="search"
          onChange={(e) => {
            this.props.setSearchFilterTitle(e.target.value);
          }}
        />
        <VehicleTypeSelect   value={this.props.searchFilterType} 
          onChange={this.props.setSearchFilterType}/>
      </>
    );
  }
}
