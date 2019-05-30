import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';




class App extends Component{

  render() {
    const columns = [
      {
        name: "Course Title",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Course Type",
        options: {
          filter: true,
          sort: false
        }
      }
    ];

    const theme = createMuiTheme({
      palette: {
        accent2Color: "#d1c4e9",
      },
      typography: {
        useNextVariants: true
      },
      overrides: {
        MUIDataTable: {
        root: {
          backgroundColor: "#f",
        },
        paper: {
          boxShadow: "none",
        }
      },

        /*MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#72d1e5",
          }
        }*/

         }
       }

   );

    const courses = [
      {
        "courseId": "cpr", courseTitle: "First Aid and CPR", courseType: "Healthcare"
      },
      {
        "courseId": "derivatives", courseTitle: "Basics of Derivatives", courseType: "Finance"
      },
      {
        "courseId": "speak-english", courseTitle: "Speak English", courseType: "Soft Skills"
      },
    ];

    const courseValues = [];
    for (let i = 0; i < courses.length; i++){
      courseValues[i] = Object.values(courses[i]);
    }

    const final = [];
    for (let j = 0; j < courseValues.length; j++){
      final[j] = courseValues[j].slice(1);
    }
    console.log(final);

    const options = {
      filter: true,
      filterType: "dropdown",
      selectableRows: true,
      responsive: "scroll",
      rowHover: true,
      search: true
    };

    return (
      <MuiThemeProvider theme = {theme}>

        <MUIDataTable
          title = {"Course List"}
          data = {final}
          columns = {columns}
          options = {options}
        />
      </MuiThemeProvider>

    );
  }

  }

  export default (App);
