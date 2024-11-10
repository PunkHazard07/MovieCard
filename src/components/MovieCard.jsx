import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieCard = ({title, overview, releaseYear, showType, imageSet}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ imageSet ||"holder.js/100px180" } />
      <Card.Body>
        <Card.Title>{title || "title"}</Card.Title>
        <Card.Text>
         {overview || "About"}
        </Card.Text>
        <Card.Text>
         {releaseYear || "Release Year"}
        </Card.Text>
        <Card.Text>
         {showType || "Genre"}
        </Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard