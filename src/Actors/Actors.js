import { React, Component } from 'react';
import $ from 'jquery';
import ActorRow from './ActorRow';

class Actors extends Component {
    constructor(props) {
        super(props) 
        this.state = {movieList: []}
    };
    componentDidMount = () => {
        console.log(this.props.location.id)
        const name = this.props.location.id;
        var url = 'https://api.themoviedb.org/3/search/person?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query='+name+'&page=1&include_adult=false';
        $.ajax ({
            url: url,
            success: (searchResults) => {
                console.log("Successful call to the API");
                const results = searchResults.results;
                console.log(results);
                // console.log(results.known_for_department)
                var moviesArray = []
                results.forEach((actor)=> {
                        let moviesActor = actor.known_for;
                        moviesActor.forEach((movies) => {
                        movies.poster_src = "https://image.tmdb.org/t/p/w185" + movies.poster_path
                        console.log(movies)
                        moviesArray.push(movies[0])
                        moviesArray.push(<ActorRow key={movies.id} movies={movies}/>)
                    })
                    this.setState({movieList: moviesArray})
                })
            },
            error: (xhr, status, err) => {
                console.log(err);
                }
            });
        }
    render() {
        return (
            <div className="">
                {this.state.movieList}
            </div>
        )
    }
}

export default Actors;
