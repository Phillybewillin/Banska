
import { useNavigate } from 'react-router';
import './NotFound.css';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={()=>{navigate('/')}}>Home</button>
    </div>
  )
}
