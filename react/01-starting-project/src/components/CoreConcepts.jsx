
import "./CoreConcepts.css"

export default function CoreConcepts({image, title, description}){ // object destructuring 
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }