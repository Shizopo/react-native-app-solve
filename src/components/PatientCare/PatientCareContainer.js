// @flow

import React from "react";
import { Alert } from "react-native";
import PatientCare from "./PatientCare";

type Props = {};
type State = {
  patientsData: [],
};

class PatientCareContainer extends React.Component<Props, State> {
  state = { patientsData: [] };

  searchablePatientsData = [];

  componentDidMount() {
    fetch(
      `https://rickandmortyapi.com/api/character/[1,2,3,4,5,8,10,12,14,16,18,20]`
    )
      .then(resp => resp.json())
      .then(resp => {
        let patientsData = this.arrangeContactsList(resp);
        this.searchablePatientsData = [...patientsData];
        this.setState({ patientsData });
      })
      .catch(err => Alert.alert("An error occured", err));
  }

  arrangeContactsList = (arr: []) => {
    let currentData = [];
    arr.forEach(el => {
      currentData.push({
        id: el.id,
        name: el.name,
        gender: el.gender,
        dob: "07/04/1980",
        age: "39",
        doctor: "Dr. Sam Smith",
        bp: "140/90",
        a1c: (Math.floor(Math.random() * (50 - 100) + 100) / 10).toString(),
        lastCheck: Math.floor(Math.random() * (1 - 24) + 24).toString(),
      });
    });
    return currentData;
  };

  searchPatients = (input: string) => {
    const searchResult = this.searchablePatientsData.filter(item => {
      const patientData = `${item.name.toUpperCase()}   
      ${item.gender.toUpperCase()} ${item.dob} ${item.age}`;
      const inputData = input.toUpperCase();
      return patientData.indexOf(inputData) > -1;
    });
    this.setState({ patientsData: searchResult });
  };

  onPress = () => {
    Alert.alert("Tap detected", "It's just a message");
  };

  render() {
    return (
      <>
        <PatientCare
          patientsData={this.state.patientsData}
          search={this.searchPatients}
          onPress={this.onPress}
        />
      </>
    );
  }
}

export default PatientCareContainer;
