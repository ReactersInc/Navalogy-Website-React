import { Link } from 'react-router-dom'
import './error.css'
import Button from '../button/Button'

const Error = () => {
  return (
    <div id='errorContainer'>

        <div id="errorText">
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>Sorry, we couldn't find the page you're looking for.</p>

            <Link to="/" className="btnLink">
                <Button
                    text="Go Home"
                />
            </Link>
        </div>
    </div>
  )
}

export default Error