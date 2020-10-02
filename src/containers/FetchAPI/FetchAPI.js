import React, { Component } from 'react'
import StudentCard from '../../components/studentCard/StudentCard';

export class FetchAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
             students : []
        }
    }
    
    gradeAverage = (grades) => {
        const IntergerGrades = grades.map(grades => {
            return parseInt(grades);
        })
        
        const result = IntergerGrades.reduce((acc, current) =>{
            return (acc + current);
        });
        return result/grades.length;
    }

    fetchData = async() => {
        const API_URL = "https://www.hatchways.io/api/assessment/students";
        const response = await fetch(API_URL,{method : 'GET'});
        const JsonData = await response.json();
        const listOfStudents = (JsonData.students).map((data, index) => {
            const average = this.gradeAverage(data.grades);
            return <StudentCard key = {data.id}
                pic = {data.pic} 
                fullName = {data.firstName + ' ' + data.lastName}
                email = {data.email}
                company = {data.company}
                skill = {data.skill}
                average = {average}
            />
        });
        this.setState({ students: listOfStudents });
    }
    componentDidMount(){
        
        this.fetchData();
    }

    render() {
        return (
            <div>
                {this.state.students}
            </div>
        )
    }
}

export default FetchAPI