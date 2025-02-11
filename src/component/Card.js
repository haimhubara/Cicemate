import { Link } from "react-router-dom"
import backupImg from "../assets/images/backup.png"

const Card = ({movie}) => {
    const {id, original_title, overview, poster_path} = movie;
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :backupImg;
  return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={imageUrl} alt="description" />
    </Link>
    <div className="p-5">
        <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
       
    </div>
</div>
  )
}

export default Card
