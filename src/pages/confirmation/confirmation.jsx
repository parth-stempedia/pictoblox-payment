import { useLocation } from "react-router-dom";
import "./confirmation.css";
import stempediaLogo from "../../assets/STEMpedia-logo.png"
function ConfirmationPage(){
    const location = useLocation();
    const creditsMapping = {
        "jASbZeAXgWQa8Zvl8ROW":"$1",
        "uPjrX0K12SvTudUlXEXh":"$5",
        "mmm5pXss0BVuJwWtGTgA":"$10",
        "s95STIpT2NCxWKzqj42i":"$20",
        "pjW04VB6qZVfrAk9ppEB":"$50",
        "W9ft53OBaaBEorIkcvbU":"$100",
        "uOPOPNdDjS9D0n4Rg4NX":"$200",
        "Tq1N80rAJghex2QsNed6":"$500",
        "YzGV2knHfklH9L68Qq16":"$1000"
    }
    return(
        <div className="credit-div">
		<img width="220" height="55" src={stempediaLogo} className="credit-logo" />
		<h2 className="heading">Checkout</h2>
		<p id="Sentence" style={{textAlign:"justify",fontSize:"15px",fontFamily:"Roboto"}}>You are purchasing credits for {location.state.name}.Your total payment amount is {creditsMapping[location.state.credits]}.</p>
		<button id="rzp-button1">Pay with Razorpay</button>
        </div>
    )
}

export default ConfirmationPage;