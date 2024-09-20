import ParaGraph from '../website/ParaGraph';
import Content from '../website/Content';
import Thozhil from "../website/Thozhil";
import Card from '../website/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
  import image1 from "../asset/efficiency.jpeg";
  import image2 from "../asset/complete.jpeg";
  import image3 from "../asset/gaurante.jpeg";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../website/Text';
import image4 from "../asset/image3.svg";
import SwiperComponent from '../website/SwiperComponent';
import '../website/SwiperComponent.css'; // Import the CSS file
import sample1 from "../asset/first.jpeg";
import sample2 from "../asset/second.jpeg";
import sample3 from "../asset/third.jpeg";
import sample4 from "../asset/fourth.jpeg";
import sample5 from "../asset/fifth.jpeg";
import sample6 from "../asset/sixth.jpeg";
import sample7 from "../asset/seven.jpeg";
import sample8 from "../asset/eight.jpeg";
import HoverCard from '../website/HoverCard';
import Blur from "../website/Blur";
//import Footer from './website/Footer';
import ParaGraph1 from '../website/ParaGraph1';




function Home() { 
  return ( 
    <>
   

   <Content/>
   <ParaGraph/>
   
  
  
   <Container>
        <Row>
          <Col>
            <Card
              title="Card Title 1"
              content="This is some content inside the card. It can be any text or HTML content."
              imageUrl={image1}
            />
          </Col>
          <Col>
            <Card
              title="Card Title 3"
              content="Another card with different content to show how it looks side by side."
              imageUrl={image2}
            />
          </Col>
          <Col>
            <Card
              title="Card Title 3"
              content="Another card with different content to show how it looks side by side."
              imageUrl={image3}
            />
          </Col>
        </Row>
      </Container>
      <div style={{display:"flex"}}>
      <Container >
        <Row >
          <Col style={{marginLeft: "-2%"}}>
      <Text
         title="Define Your Goals"
         text="Thozhil offers opportunities for job seekers and employers to achieve career goals through placements and internships. Our platform makes it easy to define and pursue objectives. With Thozhil, explore, connect, and succeed."
      />
      </Col>
      <Col style={{marginLeft: "-34%"}} >
      <Text
         title="Define Your Goals"
         text="Thozhil offers opportunities for job seekers and employers to achieve career goals through placements and internships. Our platform makes it easy to define and pursue objectives. With Thozhil, explore, connect, and succeed."
      />
      </Col>
      
      </Row>
    
       
     
       <Row>
        <Col  style={{marginLeft: "-2%"}}>
       <Text
         title="Define Your Goals"
         text="Thozhil offers opportunities for job seekers and employers to achieve career goals through placements and internships. Our platform makes it easy to define and pursue objectives. With Thozhil, explore, connect, and succeed."
      />
      </Col>
      <Col style={{marginLeft: "-34%"}}>
       <Text
         title="Define Your Goals"
         text="Thozhil offers opportunities for job seekers and employers to achieve career goals through placements and internships. Our platform makes it easy to define and pursue objectives. With Thozhil, explore, connect, and succeed."
      />
      </Col>
      </Row>
      </Container>
      <div>
      <img src={image4} style={{height:"80%", width:"150%", marginLeft:"-70%"}}/>
       </div>
      </div>
      <div>
      <ParaGraph1/>
    </div>
      <div>
      <h1></h1>
      <SwiperComponent />
    </div>
   
    <div className="card1-container">
      <HoverCard
        imageSrc={sample1}
        step="STEP 1"
        heading="Account Creation"
        content="Start your journey now by signing up, unlocking personalized opportunities and resources just for you."
      />
      <HoverCard
        imageSrc={sample2}
        step="STEP 2"
        heading="Customize Your Profile"
        content="Easily tailor your profile by editing skills and area of interest to match desired oppplatform."
      />
      <HoverCard
        imageSrc={sample3}
        step="STEP 3"
        heading="Easy Application Process"
        content="Apply to job and internship opportunities effortlessly with just a click on the 'Apply Now' button."
      />
      <HoverCard
        imageSrc={sample4}
        step="STEP 4"
        heading="Timely Notifications"
        content="Receive timely email notifications, ensuring you're always informed and up-to-date with the latest developments."
      />
      <HoverCard
        imageSrc={sample5}
        step="STEP 5"
        heading="Easy Dashboard Access"
        content="Quickly access everything conveniently and efficiently from your personalized dashboard interface."
      />
      <HoverCard
        imageSrc={sample6}
        step="STEP 6"
        heading="Assessment Process"
        content="Please ensure you are adequately prepared for the upcoming MCQ test."
      />
      <HoverCard
        imageSrc={sample7}
        step="STEP 7"
        heading="F2F Process"
        content="Approach direct interview through our portal with assurance and self-assurance."
      />
      <HoverCard
        imageSrc={sample8}
        step="STEP 8"
        heading="Offer Releases"
        content="Receive official offer letters and joining dates seamlessly via email and dashboard notifications."
      />
    </div>
    <Blur />
    </>
  ); 

} 
  
export default Home; 