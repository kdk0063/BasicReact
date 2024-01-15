import ProfileCard from "./ProfileCard/ProfileCard";
import AlexaImage from "../../images/ProfileCard/alexa.png";
import CortanaImage from "../../images/ProfileCard/cortana.png";
import SiriImage from "../../images/ProfileCard/siri.png";

function ProfileHome() {
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Very Basic React Component Structure</p>
                </div>
            </section>

            <div className="container">
                <section className="section"> 
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana42"
                                image={CortanaImage}
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri was made by Apple and is being pahsed out."
                            />  
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}

export default ProfileHome;