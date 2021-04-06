import React  from 'react';
import {Link} from 'react-router-dom';
const DeleteCandidateButton = () =>{
    return(

        <React.Fragment>
            <Link to="/deleteCandidate" class="btn btn-danger">
                Delete 
            </Link>
        </React.Fragment>        
    );
}

export default DeleteCandidateButton;