import { useParams } from "react-router-dom";
import {useEffect} from "react";



function Detail() {
    const { id } = useParams();

    const getMovie = async(id) => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
    }

    useEffect(() => {
        getMovie(id);
    }, []);

    return (
        <div>Details</div>
    );
}

export default Detail;