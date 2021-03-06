import React from 'react';
import '../Home/MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class ActorRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

        return (
            <div className="card margin con-2" style={{width: "400px"}}>
            <img className="card-img-top" src={this.props.movies.poster_src} alt="Card  cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{this.props.movies.overview}</p>
                <Link className=""
                to={{
                    pathname: "/showsdetail",
                    id: this.props.movies.id // your data array of objects
                }}
                >
                <button className="btn btn-primary" type='button'><h4>Movie/show Page</h4></button>
                </Link> 
                <p className="card-text"><b>original_language</b>: {this.props.movies.original_language}</p>
                <p className="card-text"><b>Release Date </b> {this.props.movies.release_date}/10</p>

            </div>
            </div>
        )

    }
}


export default withRouter(ActorRow);