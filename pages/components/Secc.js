import React, { Component } from "react";
import Select, { components } from "react-select";

const BranchAusiris = [
  { label: "สาขาสีลม" },
  { label: "สาขาเชียงใหม่" },
  { label: "สาขาหาดใหญ่" },
  { label: "สาขาตึก" }
].map(BranchAusiriss => ({
  value: BranchAusiriss.label,
  label: BranchAusiriss.label
}));

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);

export default class CustomControl extends Component {
  state = {};
  render() {
    return (
      <Select
        defaultValue={BranchAusiris[0]}
        isClearable
        styles={{
          singleValue: base => ({
            ...base,
            padding: 5,
            borderRadius: 5,
            background: BranchAusiris[2].color,
            color: "white",
            display: "flex"
          })
        }}
        components={{ SingleValue }}
        isSearchable
        name="color"
        options={BranchAusiris}
      />
    );
  }
}
