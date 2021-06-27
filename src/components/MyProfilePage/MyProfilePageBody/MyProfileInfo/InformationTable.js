import { Table } from "react-bootstrap"
const InformationTable = () =>{
    return (
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name Surname</th>
      <th>Erhan Kudretli</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th>Email</th>
      <th>ErhanKudretli@gmail.com</th>
    </tr>
    <tr>
    <th>Phone Number</th>
      <th>078 792 57 29</th>
    </tr>
    <tr>
    <th>Company Name</th>
      <th>Kudretli AG</th>
    </tr>
    <tr>
    <th>Company Adress</th>
      <th>Route d´alcantara Fribourg</th>
    </tr>
    <tr>
    <th>Bio </th>
      <th>Kudretli AG 1992 yilinda kurulmustur.</th>
    </tr>
  </tbody>
</Table>
    )
}

export default InformationTable