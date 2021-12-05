import React from 'react';
import './style.css';
import MedicalTreatmentList from './MedicalTreatmentList';

function App() {
  const TreatmentData = [
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },  
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },
    {
      TreatId: ' 001',
      TreatCourseId: ' 123',
      Type:' 2166',
      Category:' Vaccines',
      Name:' Zarif',
      StartDate:' 21.12.2021',
    },
  ];

  return (
    <div>
      <MedicalTreatmentList recordslist={TreatmentData}></MedicalTreatmentList>
    </div>
  );
}
export default App;
