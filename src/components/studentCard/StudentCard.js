import React from 'react'
import './StudentCard.css'

function StudentCard( props ) {
    return (
        <div className='card'>
            <section className='imageSection'>
                <img className='studentImage' src ={props.pic} alt='student Picture'/>
            </section>
            
            <section className = 'descriptionSection'>
                <h2>{props.fullName}</h2>
                <p>Email : {props.email}</p>
                <p>Company : {props.company}</p>
                <p>Skill : {props.skill} </p>
                <p>Average :  {props.average}%</p>
            </section>
        </div>
    )
}

export default (StudentCard)
