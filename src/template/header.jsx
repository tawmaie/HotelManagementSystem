import '../style/header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Header(){
    
    return (
        <div className="header">
        <Row className='justify-content-md-center header-title'>
            <Col md='auto'><h1>Noppawut Eiamwat</h1></Col>
        </Row>
        <Row className='justify-content-center header-list'>
            <Col md='auto'>
                <ListGroup horizontal>
                    <ListGroup.Item style={{border: 'none'}}>หน้าหลัก</ListGroup.Item>
                    <ListGroup.Item style={{border: 'none'}}>เกี่ยวกับฉัน</ListGroup.Item>
                    <ListGroup.Item style={{border: 'none'}}>ติดต่อ</ListGroup.Item>
                    <ListGroup.Item style={{border: 'none'}}>ผลงานของฉัน</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </div>
    )
}