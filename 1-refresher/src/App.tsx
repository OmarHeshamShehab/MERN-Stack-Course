import { Description } from "./components/Description"
import Title from "./components/Title"

function App() {

  const description = <h2><i>this is my react app</i></h2>
  return (
    <>
      <Title title="My Title" />
      <Description Desc={description} />
      <summary>
        <h3><b>this is a summary for your app</b></h3>
      </summary>
    </>
  )
}

export default App
