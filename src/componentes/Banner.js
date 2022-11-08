import { useState, useEffect } from "react";
import { Container , Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import React from "react";
import TrackVisibility from 'react-on-screen';

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer" , "UI/UX Designer"];

    const [text, setText] =useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect( () => {
        let ticker = setInterval(() => {
            tick();
            
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
         
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        { ({ isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Mariel `}<span className="wrap">{text}</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis libero quis neque sagittis posuere. Ut id ex nunc. Aliquam vestibulum et libero eget aliquam. Etiam faucibus aliquet facilisis. Sed dignissim nunc magna, et congue leo vestibulum sit amet. Proin posuere mi id metus posuere lacinia lacinia vel quam. Donec quis fringilla ex, faucibus tincidunt velit. Phasellus blandit suscipit tellus, in condimentum magna tempor non. Suspendisse ut nisi sed erat feugiat sollicitudin. Integer a erat ex. Nunc vitae est ac velit eleifend finibus vel sit amet sem. Quisque gravida, tellus vel eleifend fringilla, justo quam vehicula nisl, eu suscipit neque nulla eget urna. Integer nec felis lorem.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                   </div>}
                   </TrackVisibility>
                    </Col>
                    <Col xs ={12} md={6} xl={5}>
                        <TrackVisibility>
                         { ( { isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header img" />
                        </div>}
                    </TrackVisibility>  
                     </Col>
                </Row>
            </Container>
        </section>
)
}