import { Button } from "react-bootstrap"
import {Link} from 'react-router-dom'

const UpdateProfile = () => {
    return(
        <Link to="updateprofileinfo">
        <Button variant="success">Update Your Information</Button>
        </Link>
    )
}

export default UpdateProfile