import React from "react";
import axios from 'axios';

import Cour from "../Components/Cour";
import CustomCourForm from "../Parts/FormCour";

class CourPanel extends React.Component {
  constructor(props){
    super(props);
      this.state={
        Cours : [],
      };
 
  } 

  // here i fetch data from the db to put it in the cours element
  componentDidMount(){
      try{
        axios.get('http://127.0.0.1:8000/api/cours/').then(res =>{
          this.setState({
            Cours : res.data
          })
        })
      }catch(err){
        console.log(err);
      }
  }
  render() {
    return (
      <div>
        <Cour data={this.state.Cours}/>
        <CustomCourForm requestType='post' courID={null} btnText="Create"/>
      </div>
    );
  }
}
export default CourPanel;
