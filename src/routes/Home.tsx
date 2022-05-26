import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/another">Another</Link>
      <h1>I'm the home Route</h1>
      <p>I'm also the default route if none are specified.</p>
    </>
  )
}

export default Home
