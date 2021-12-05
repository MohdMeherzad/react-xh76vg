import React from 'react';
function Medicaltreatment(props){

    return (
      <h4>
        TreatId: 
        {props.individualRecord.TreatId}, 
        TypeCourseId:
        {props.individualRecord.TreatCourseId}, 
        Type:
        {props.individualRecord.Type},
        Category:
        {props.individualRecord.Category}, 
        Name:
        {props.individualRecord.Name},
        StartDate:
        {props.individualRecord.StartDate}
      </h4>
    );
} 
export default Medicaltreatment;
