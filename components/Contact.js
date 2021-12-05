import { LocationOn } from "@material-ui/icons";
import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";

const Contact = () => {
    return (
        <div>
            <h1>This is Contact</h1>
            <h2>Get In Touch By Finding Us On The Social Media Platforms</h2>

            <div style={{ 'paddingLeft': "60px" }}>
                <LocationOn style={{ 'color': "red" }} />
                Kirtipur,Kathmandu,Nepal
                <div>
                    <Call style={{ 'color': "black" }} />
                    +977 984561237
                    <Call style={{ 'color': "black" }} />
                    +977 984561237
                    <div>
                    <Mail style={{ 'color': "black" }} />
                    office@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
