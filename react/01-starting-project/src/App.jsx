import { PROPS_DATA, EXAMPLES } from "./data.js"
import Header from "./components/Header.jsx"
import CoreConcepts from "./components/CoreConcepts.jsx"
import TabButton from "./components/TabButton.jsx"
import { useState } from "react"




function App() {
  const [selectedTopic, setSelectedTopic] = useState()



  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {PROPS_DATA.map((item) => (
              <CoreConcepts key={item.title} {...item}></CoreConcepts>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
