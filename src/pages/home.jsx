import BackgroundVideo from "../component/background-video"
import '../style/home.css'
import { Container, Col, Row } from "react-bootstrap"

export default function Home(){
    return(
        <Container>
            <BackgroundVideo />
            <div id="des-div">
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <h1>
                        ยินดีต้อนรับสู่เว็บไซต์ของฉัน!
                        </h1>
                        <p>ที่นี่คุณจะได้พบกับรวบรวมผลงานและการทำงานที่ผ่านมาของผมไม่ว่าจะเป็นโปรเจคที่ได้ร่วมมือกับทีมหรือคนเดียว</p>
                        <p>ขอขอบคุณที่มาเยือนเว็บไซต์ของผม หวังว่าคุณจะได้รับความรู้ แรงบันดาลใจ และความสนุกกับการสำรวจผลงานและเรื่องราวที่ผมได้นำเสนอเอาไว้ที่นี่</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}