
import Footer from "./Components/FooterDiv/Footer"
import Job from "./Components/JobDiv/Job"
import NavBar from "./Components/NavBar/NavBar"
import Search from "./Components/SearchDiv/Search"
import Value from "./Components/ValueDiv/Value"


const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>

    </div>
  )
}

export default App