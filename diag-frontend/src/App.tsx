import { Header, Sidebar } from "./components";
import Register from "./components/Auth/Register";


const App = () => {
  return (
    <div className=''>
      <Header />
      <div>
        <Sidebar />
        <Register />
      </div>
    </div>
  )
}
export default App;