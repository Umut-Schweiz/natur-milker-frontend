import { Tabs, Tab } from 'react-bootstrap'

const ProductInfo = () => {
  return (
    <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
      <Tab eventKey='description' title='Description'>
        sdasdasd
      </Tab>
      <Tab eventKey='contact' title='Contact'>
        dasdasda
      </Tab>
      <Tab eventKey='navigation' title='Navigation'>
        sdasdasdada
      </Tab>
    </Tabs>
  )
}
export default ProductInfo
