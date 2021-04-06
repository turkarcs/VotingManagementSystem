import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CandidateItemComponent from './CandidateItemComponent';
//import BedItemComponent from './BedItemComponent';

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            candidates:[]
        }
    }

    render() {
        return (
            <div className="doctors">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <hr />
                        <CandidateItemComponent />
                        
                    </div>
                </div>
            </div>
            </div>

        );
    }

}

export default DashboardComponent;