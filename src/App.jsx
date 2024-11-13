import Navbar from "../public/components/Navbar"
import Hero from "../public/components/Hero"
import Card from "../public/components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards--list">
            {cards}
          </section>
          
      </div>
  )
}