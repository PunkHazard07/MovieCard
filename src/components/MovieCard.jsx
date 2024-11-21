import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieCard = ({title, description, year, rating, image}) => {

  const style = {
    img: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover'
    },
    body: {
      padding: '1rem',
      margin: '0',
      gap: "10px",
      height: '100%',
    }
  }
  return (
    <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src={ image ||"holder.js/100px180" } style={style.img}/>
      <Card.Body style={style.body}>
        <Card.Title>{title || "title"}</Card.Title>
        <Card.Text>
         {description || "About"}
        </Card.Text>
        <Card.Text>
        Year:  {year || "Release Year"}
        </Card.Text>
        <Card.Text>
        Ratings: {rating || "Genre"}
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard