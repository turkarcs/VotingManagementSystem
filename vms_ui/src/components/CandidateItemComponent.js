import React from 'react'
import AddCandidateButton from './Candidate/AddCandidateButton';
import GetCandidateButton from './Candidate/GetCandidateButton';
import DeleteCandidateButton from './Candidate/DeleteCandidateButton';

class CandidateItemComponent extends React.Component {
    render() {
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto"><b>Add Candidate Details</b></span>
                     </div>
                     <div className="col-md-8 d-none d-lg-block">
                         <p>This service is to add the candidates details and save it permanently inside the repository</p>
                     </div>
                     <div className="col-md-2">
                        <AddCandidateButton />
                     </div>
                 </div>
             </div>
             <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><b>Get Candidate Details</b></span>
                        </div>
                        <div className="col-md-8 d-none d-lg-block">
                            <p>This service is to get the details of candidates in the table format</p>
                        </div>
                        <div className="col-md-2">
                            <GetCandidateButton />
                        </div>
                        </div>
                </div>
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto"><b>Delete Candidate Details</b></span>
                        </div>
                        <div className="col-md-8 d-none d-lg-block">
                            <p>This service is to delete the details the candidate details in the table format</p>
                        </div>
                        <div className="col-md-2">
                            <DeleteCandidateButton />
                        </div>

                    </div>
                </div>


         </div>
        
        )
    }
}

export default CandidateItemComponent;