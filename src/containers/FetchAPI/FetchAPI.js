import React, { Component } from 'react'
import InputComponent from '../../components/InputComponent/InputComponent';
import StudentCard from '../../components/studentCard/StudentCard';
import './FetchAPI.css';


export class FetchAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students : [],
            studentData : [],
            studentNames : [],
            searchName : '',
            found : false,
            Result : ''
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

        const studentNames = (JsonData.students).map((data, index) => {
            return data.firstName;
        });
        this.setState({ 
            students: listOfStudents,
            studentNames : studentNames,
            studentData : JsonData.students,
        });
    }
    componentDidMount(){
        this.fetchData();
    }

    changeHandler = (event) => {
        let search = event.target.value;
        this.setState({ searchName: event.target.value });
        this.dynamicSearch(search)
    }

    dynamicSearch = (search) => {
        const searchResult = this.state.studentData.filter(data => {
            if((data.firstName.includes(search) || data.lastName.includes(search))){
                this.setState({ found : !this.state.found });
                return data;  
            }
        });
        this.setState({ Result : searchResult  });
    }

    render() {
        let content = '';
        if(!this.state.found){
            content = this.state.students;
        }else{
            content = this.state.Result.map(data => {
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
        }
        return (
            <div className='content'>
                <InputComponent 
                    value = {this.state.searchName} 
                    changeHandler = {this.changeHandler}
                    />
                {content}
            </div>
        )
    }
}

export default FetchAPI