import React, {Component, Fragment} from "react";;
import quizData from "./data";
import Answer from './Answer';

//the quiz component will work in a few steps...
//1. create state, we create an object and then create a dataQuestion variable with an array
//2. create the function, function name setstatefunction and use setState method and set daya from data.js file
//3. component did mount
//4. use a map()function, map function works with a javascript array, then we return the answer component 

class Quiz extends Component{
    state ={
        dataQuestion: [],
    }

    setStateFunction = () => {
        //use react setState
        this.setState({
            dataQuestion:quizData
        })
    }

    componentDidMount() {
        this.setStateFunction()
    }

    render() {
        return {
            this.state.dataQuestion.map(data => {
                console.log(data);
                return <div key={data.id} className='card' >
                    <h2> {data.quiz} </h2>
                    <Answer key={data.id} rightAnswer={data.rightAnswer} answer={data.findAnswer} />

                </div>
            })
        }
    }
}

