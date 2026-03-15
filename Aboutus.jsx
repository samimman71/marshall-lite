import { Link } from "react-router-dom";

function About()
{
    return(
        <div className="look">
        <h1>About Us</h1>
        <p>Marshall is a legendary British audio brand, founded in 1962, renowned for its iconic guitar amplifiers that shaped the sound of rock 'n' roll. Marshall Group, now creating consumer electronics, brings this 60+ year heritage to portable and home speakers, featuring signature, high-quality sound with a distinctive, retro rock-and-roll aesthetic. </p>
        <Link to="/" className="back-btn">Back to Home</Link>

    </div>
    )
}
export default About;