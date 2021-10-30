import logo from './logo.svg';
import './App.css';
import Anagram from 'react-anagram-animation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import IMG from '../src/assets/project.png'
import IMG2 from '../src/assets/project2.jpeg'
import IMG3 from '../src/assets/project3.png'
import Email from '../src/assets/email.png'
import Call from '../src/assets/call.png'
import GIT from '../src/assets/git.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />

      <div id="home" className="container d-flex justify-content-center align-content-center " style={{ height: "350px" }}>
        <div className="row" style={{ paddingTop: "120px" }}>
          <h1><span>Hi</span>,<br /><span style={{ color: "grey", margin: "3px" }}>I am</span><br /><Anagram words={['Talha Ansari', 'Ansari Talha']} /><span style={{ position: "relative", top: "-190px", margin: "7px", fontSize: "20px", color: "whitesmoke",backgroundColor:"black",padding:"2px",borderRadius:"4px" }}> &lt; Web Developer /&gt;</span></h1>
        </div>
      </div>

      <div id="about" className="container d-flex justify-content-center align-content-center bg-dark text-center" style={{ height: "380px",borderRadius:"6px" }}>
        <div className="row d-flex justify-content-center " style={{ paddingTop: "20px" }}>
          <h1 style={{color:"white"}}>About Me</h1>
          <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine" }}></div>
          <h5 style={{marginTop:"8px",color:"white"}}>Design + Development</h5>
          <p style={{ fontFamily: "sans-serif",color:"white",fontWeight:"325"}}>I am a Bsc IT Graduate with a penchant for design and storytelling. I am passionate about enhancing user experience and maximizing user interface. I am a Web Developer from Mumbai who enjoys building everything from a small business sites to rich interactive web apps. If you are a business seeking a web presence or an employ looking to hire, you can get in touch with me here.<div className="pt-3"><span style={{backgroundColor:"aquamarine",padding:"7px",borderRadius:"5px"}}><a href="#contact" style={{textDecoration:"none",color:"white",fontWeight:"700"}}>Contact</a></span></div></p>
        </div>
      </div>
      <div className="container" >
        <h4 className="text-center" style={{paddingTop:"25px"}}>Skills</h4>
        <div className="d-flex justify-content-around">
          <div className="my-3"><p>Html 5 <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "70px", height: "4px", backgroundColor: "#e34c26", borderRadius: "40px" }}></div></div></p>
            <p>Css 3 <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "65px", height: "4px", backgroundColor: "#264de4", borderRadius: "40px" }}></div></div></p>
            <p>Js <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "56px", height: "4px", backgroundColor: "#f0db4f", borderRadius: "40px" }}></div></div></p>
            <p>React <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "60px", height: "4px", backgroundColor: "#61DBFB", borderRadius: "40px" }}></div></div></p>
            <p>Bootstrap <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "70px", height: "4px", backgroundColor: "#563d7c", borderRadius: "40px" }}></div></div></p></div>
          <div className="my-3"><p>Express <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "57px", height: "4px", backgroundColor: "#303030", borderRadius: "40px" }}></div></div></p>
            <p>Php <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "45px", height: "4px", backgroundColor: "#8993be", borderRadius: "40px" }}></div></div></p>
            <p>Python <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "40px", height: "4px", backgroundColor: "#4B8BBE", borderRadius: "40px" }}></div></div></p>
            <p>MongoDb <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "58px", height: "4px", backgroundColor: "#4DB33D", borderRadius: "40px" }}></div></div></p>
            <p>MySql <div style={{ width: "80px", height: "4px", backgroundColor: "aquamarine", borderRadius: "40px" }}><div style={{ width: "53px", height: "4px", backgroundColor: "#F29111", borderRadius: "40px" }}></div></div></p>
          </div>
        </div>



        <div id="projects" className="container " style={{ paddingTop: "20px"}} >
          <h2 className="text-center" style={{ color: "black",marginBottom:"30px" }}>My Work's</h2>
          <marquee>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div  style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Taaba Web</p><a href="http://react-web-app0.herokuapp.com/"><img src={IMG} className="images" width="300px"></img></a></div>
            <div style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Whatsapp Ui</p><a href="https://github.com/Talha-stack-ui/whatsappui/"><img src={IMG2} className="images" width="300px"></img></a></div>
            <div  style={{padding:"9px"}}><p className="text-center" style={{fontWeight:'bold'}}>Wall Gallery</p><a href="https://github.com/Talha-stack-ui/wall-gallery/"><img src={IMG3} className="images" width="300px"></img></a></div>
          </div>
          </marquee>
        </div>


        <div id="experience" className="container text-center " style={{ padding: "30px"}} >
          <h2 className="text-center" style={{ color: "black",marginBottom:"30px" }}>Work Experience</h2>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div style={{border:"1px solid grey",boxShadow:"5px 10px lightgrey",margin:"10px",borderRadius:"6px"}}>
              <h4 className="p-2">Discover Technologies | Dec - 2019 </h4>
              <h6 className="p-2">Technical Assistant</h6>
             <p className="mt-3 p-2">Created web-based promotional collateral for different campaigns.
                 I worked closely with the upper management to make sure that the data they need for their websites could be extracted precisely from the internet.
              </p>
            </div>
            <div style={{border:"1px solid grey",boxShadow:"5px 10px lightgrey",margin:"10px",borderRadius:"6px"}}> 
              <h4 className="p-2">Soft Digtits | Dec - 2019 </h4>
            <h6 className="p-3">JR Web Developer</h6>
              <p className="mt-3 p-2">Designed and coded websites, from layout to function, according to client specificaions.
                My role was to develop the front end for the websites and web apps on React Js as told by the seniors. </p>
            </div>
          </div>
        </div>


      </div>

      <div id="contact"><Footer imageE={Email} imageC={Call} imageG={GIT}/></div>
    </div>
  );
}

export default App;
