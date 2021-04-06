import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getCandidates} from '../../actions/CandidateAction';

class GetCandidateComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            candidates:[]
        }
    }

    componentDidMount(){
        this.props.getCandidates();
    }

    render() {
        const {candidates} =  this.props.candidates;
        return (
            <div class="container">
                <br/>
                <table class="table table-bordered table-striped table-hover table-lg">
                    <tr>
                        <th>Candidate Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>EmailId</th>
                        <th>Phone Number</th>
                        <th>Constituency</th>
                        <th>Password</th>
                    </tr>

                    <tbody>
                        {
                            candidates.map((candidate) => {
                                const { candidateId,firstName, lastName,gender,age, emailId, phoneNumber, constituency,password } = candidate;
                                return (
                                    <tr>
                                        <td>{candidateId}</td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{gender}</td>
                                        <td>{age}</td>
                                        <td>{emailId}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{constituency}</td>
                                        <td>{password}</td>
                            
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

GetCandidateComponent.propTypes={
    getCandidates:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    candidates:state.candidates
});

export default connect(mapStateToProps,{getCandidates})(GetCandidateComponent);