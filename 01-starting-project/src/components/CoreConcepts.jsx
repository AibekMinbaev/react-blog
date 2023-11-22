import { PROPS_DATA} from "../data.js"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {PROPS_DATA.map((item) => (
                <CoreConcept key={item.title} {...item}></CoreConcept>
            ))}
            </ul>
      </section>
    )
}