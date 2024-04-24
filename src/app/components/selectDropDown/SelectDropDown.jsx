// "use client"

// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
//   DropdownMenuSelect
// } from "@/components/ui/dropdown-menu"

// export function DropdownMenuRadioGroupDemo() {
//   const [position, setPosition] = React.useState("bottom")

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
//           <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
//           <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
//           <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactMonthPicker from "react-month-picker";
import "react-month-picker/css/month-picker.css";
// import  { Component } from 'react';
// import { render } from 'react-dom';

import {
  MonthPickerDropdown
} from 'react-month-picker-dropdown'
import 'react-month-picker-dropdown/dist/index.css'

export const MonthPicker = ({ range }) => {
  const [isVisible, setVisibility] = useState(false);
  const [monthYear, setMonthYear] = useState({});

  const showMonthPicker = (event) => {
    setVisibility(true);
    event.preventDefault();
  };

  const handleOnDismiss = () => {
    setVisibility(false);
  };

  const handleOnChange = (year, month) => {
    setMonthYear({ year, month });
    setVisibility(false);
  };

  const getMonthValue = () => {
    const month = monthYear && monthYear.month ? monthYear.month : 0;
    const year = monthYear && monthYear.year ? monthYear.year : 0;

    return month && year ? `${month}-${year}` : "Select Month";
  };

  return (
    <div className="MonthYearPicker">
      <button onClick={showMonthPicker}>{getMonthValue()}</button>

      <ReactMonthPicker
        show={isVisible}
        lang={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]}
        years={range}
        value={monthYear}
        onChange={handleOnChange}
        onDismiss={handleOnDismiss}
      />
    </div>
  );
};



// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



export const monthYear=()=> {
  const handleAMonthChange = (event) => {
    console.log(event)
  }

  const getMarkUpForOkButton = () => {
    return (
      <button className='button'> Select Me</button>
    )
  }

  const getMarkUpForCancelButton = () => {
    return (
      <button className='button'> Cancel Me</button>
    )
  }
  return (
    <div>
      <MonthPickerDropdown
      CTabIndex={3}
      label="Select Months"
      searchTextLabel="Filter the months by typing here"
      startYear={2024}
      startMonth={1}
      endYear={2030}
      endMonth={5}
      displayShortMonthName={true}
      displayShortYearName={false}
      hideCheckBox={true}
      displayOkAndCancelButton={true}
      onChange={this.handleAMonthChange}
    />
  </div>
  );
}