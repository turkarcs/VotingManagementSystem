import React  from 'react';
import {Link} from 'react-router-dom';
const AddCandidateButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addCandidate" className="btn btn-lg btn-info">
                Add
            </Link>
        </React.Fragment>        
    );
}

export default AddCandidateButton;