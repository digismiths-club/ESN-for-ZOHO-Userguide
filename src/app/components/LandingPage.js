import Feature from "./Feature";
import HeroSection from "./HeroSection";
import Faq from "./Faq"

export default function LandingPage(){
    return (
        <div className="w-screen">
            <HeroSection/>
            <Feature/>
            <Faq/>
        </div>
    );
}