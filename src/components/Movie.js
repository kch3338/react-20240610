import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
    return (
        <div>
            <div key={ id }>
                <img src={ coverImg } alt={ title } />
                <h2>
                    <Link to={`/movie/${id}`}>{ title }</Link>
                </h2>
                <p>{ summary }</p>
                <ul>
                    { genres.map((genre) =>
                        <li key={ genre }>{ genre }</li>
                    ) }
                </ul>
            </div>
        </div>
    );
}

export default Movie;