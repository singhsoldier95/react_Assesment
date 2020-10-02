import React from 'react'

function StudentCard( props ) {
    return (
        <div>
            <img src ={props.pic} alt='ruk ja mama'/>
            <h2>{props.fullName}</h2>
            <p>Email : {props.email}</p>
            <p>Company : {props.company}</p>
            <p>Skill : {props.skill} </p>
            <p>Average :  {props.average}%</p>
        </div>
    )
}

export default StudentCard
