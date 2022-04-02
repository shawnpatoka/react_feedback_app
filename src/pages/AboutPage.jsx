import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {



  return (
    <Card>
        <div className="about">
            <h1>About This App</h1>
            <p>this is something</p>
            <p><Link to="/">back to home</Link></p>
        </div>
    </Card>
  )
}
export default AboutPage