import React from 'react';
import Medicaltreatment from './MedicalTreatment';
import './MedicalTreatmentList.css';

function MedicalTreatmentList(props) {
  const htmlarrayelemet = props.recordslist.map((el) => (
    <li key={el.treadId}>
      <Medicaltreatment individualRecord={el}></Medicaltreatment>
    </li>
  ));

  console.log(props.recordslist);

  return <div className="user-record-container">{htmlarrayelemet}</div>;
}
export default MedicalTreatmentList;
