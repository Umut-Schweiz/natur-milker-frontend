import UpdateButton from './UpdateProfileButton'
import InformationTable from './InformationTable'
import { Container,Row } from 'react-bootstrap'

const MyProfileInfo = () =>{
    return (
    <Container>

        <Row>
        <InformationTable/>
        </Row>
        
        
        <Row>
        <UpdateButton/>
        </Row>
    </Container>
    
    
    )
}

export default MyProfileInfo