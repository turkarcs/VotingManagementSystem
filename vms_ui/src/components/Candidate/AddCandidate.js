import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createCandidate } from '../../actions/CandidateAction';
class AddCandidate extends Component {
    constructor(props){
        super(props);
        this.state={
            candidateId:"",
            firstName:"",
            lastName:"",
            gender:"",
            age:"",
            emailId:"",
            phoneNumber:"",
            constituency:"",
            password:"",
            errors: {}
    };
        //this.onChange=this.onChange.bind(this);
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.candidateId===""){
            alert("Candidate Id cannot be blank");
        }
        else
        {
        const newCandidate = {
            candidateId:this.state.candidateId,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            gender:this.state.gender,
            age:this.state.age,
            emailId:this.state.emailId,
            phoneNumber:this.state.phoneNumber,
            constituency:this.state.constituency,
            password:this.state.password
        }

        this.props.createCandidate(newCandidate,this.props.history);
        this.setState({candidateId:"",firstName:"", lastName:"",gender:"",age:"",emailId:"",phoneNumber:"",constituency:"",password:""});
    }
}
    render() {
        const { errors } = this.state;
        return (
            <div className="candidate">
            <div className="container">
                <div className="row">
                <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Candidate form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.candidateId})} 
                                    placeholder="Unique Candidate Id" 
                                    name="candidateId" 
                                    onChange={this.onChange}
                                    value={this.state.candidateId}
                                   />
                                   { (
                                <div className="invalid-feedback">
                                    {errors.candidateId}
                                 </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.firstName})} 
                                    placeholder="Candidate's First Name" 
                                    name="firstName" 
                                    onChange={this.onChange}
                                    value={this.state.firstName}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.firstName}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.lastName})} 
                                    placeholder="Candidate's Last Name" 
                                    name="lastName" 
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.lastName}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.gender})} 
                                    placeholder="Candidate's Gender" 
                                    name="gender" 
                                    onChange={this.onChange}
                                    value={this.state.gender}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.gender}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.age})} 
                                    placeholder="Candidate's Age" 
                                    name="age" 
                                    onChange={this.onChange}
                                    value={this.state.age}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.age}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.emailId})} 
                                    placeholder="Candidate EmailId" 
                                    name="emailId" 
                                    onChange={this.onChange}
                                    value={this.state.emailId}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.emailId}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.phoneNumber})} 
                                    placeholder="Candidate Phone number" 
                                    name="phoneNumber" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.phoneNumber}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.constituency})} 
                                    placeholder="Candidate's Constituency" 
                                    name="constituency" 
                                    onChange={this.onChange}
                                    value={this.state.constituency}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.constituency}
                                 </div>
                                    )}
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.password})} 
                                    placeholder="Candidate's Password" 
                                    name="password" 
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    />
                                    { (
                                <div className="invalid-feedback">
                                    {errors.password}
                                 </div>
                                    )}
                            </div>
                            
                            
    
                            <input type="submit" className="btn btn-secondary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddCandidate.propTypes = {
    createCandidate:PropTypes.func.isRequired
}

export default connect(null,{createCandidate})(AddCandidate);