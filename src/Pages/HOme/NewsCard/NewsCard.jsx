import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
   const {title, image_url, details, _id}=news;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <h2 className="text-2xl">{title}</h2>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    {
     details.length > 200 ?
    <p> {details.slice(0,200)} <Link to={`/news/${_id}`}  className="text-purple-500">Read More...</Link></p>
     :
     <p>{details}</p>
    }
    
  </div>
</div>
    );
};

export default NewsCard;