import { useEffect } from 'react';
import './credits.css';
import stempediaLogo from "../../assets/STEMpedia-logo.png";
import { useNavigate } from 'react-router-dom';

function CreditsPage(){
	var softver,platform,idToken;
	const navigate = useNavigate();
	useEffect(()=>{
		console.log("Loading or Reloading");
		softver = getParameterByName('soft-ver');
	 	platform = getParameterByName('platform');
		idToken = getParameterByName('idToken');
		CheckActionCode();

	});
	function CheckActionCode(){
		var baseLink = "https://asia-east2-pictobloxdev.cloudfunctions.net/getUserCreditDetail?token=";
		var Link = baseLink.concat(idToken, "&platform=", platform, "&version=", softver);
		fetch(Link,{method: 'POST',mode: 'cors'}).then((response)=>{
			if(response.ok){
				return response.json();
			}
			throw new Error('Something went wrong');
		}).then((response)=>{
			if(response.status === "success"){
				document.getElementById("name").value = (response.username);
				document.getElementById("credits").value = (response.credits_available);
				document.getElementById("softver").value = (softver);
				document.getElementById("platform").value = (platform);
				document.getElementById("idToken").value = (idToken);
				document.getElementById("country").value = (response.country);
			}
		}).catch((err)=>{
			console.log(err);
			window.location.replace("https://thestempedia.com/product/pictoblox/bad-request/");
		})
		
	}
	function getParameterByName(sParam) {
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		var sParameterName;
		var	i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};
	function navigateHandler(e){
		e.preventDefault();
		navigate('/PictoBloxPay',{state: {idToken: idToken,softver: softver,platform: platform,name: document.getElementById("name").value,credits:document.getElementById("amt").value}});
	}
    return (
        <div className='credit-div'>
		<img width="220" height="55" src={stempediaLogo} className="credit-logo" />
		<h2 className="heading">Buy PictoBlox Credits!</h2>
		<p style={{textAlign:'justify',fontSize:'15px',fontFamily:'Roboto'}}>PictoBlox Credits allows users to perform actions like speech recognition, text recognition and computer vision. To know more click <a href="https://thestempedia.com/product/pictoblox/credits/">here</a>.</p>
		<form className="credit-form" onSubmit = {navigateHandler}  method='post'>
			<label>Username: <input type = "textbox" name="name" id = "name" placeholder = "Enter your username" readOnly/></label>
			<label>Available Credits: <input type = "textbox" name="credits" id = "credits" placeholder = "Your PictoBlox Credits" readOnly/></label>
			<label>PictoBlox Credits: <select id="amt" name="amt">
				<option value="jASbZeAXgWQa8Zvl8ROW">500 Credits - $1</option>
				<option value="uPjrX0K12SvTudUlXEXh">2,750 Credits - $5</option>
				<option value="mmm5pXss0BVuJwWtGTgA">6,000 Credits - $10</option>
				<option value="s95STIpT2NCxWKzqj42i">13,000 Credits - $20</option>
				<option value="pjW04VB6qZVfrAk9ppEB">35,000 Credits - $50</option>
				<option value="W9ft53OBaaBEorIkcvbU">75,000 Credits - $100</option>
				<option value="uOPOPNdDjS9D0n4Rg4NX">175,000 Credits - $200</option>
				<option value="Tq1N80rAJghex2QsNed6">475,000 Credits - $500</option>
				<option value="YzGV2knHfklH9L68Qq16">1,000,000 Credits - $1000</option>
			</select></label>
			<input type="hidden" id = "softver" name="softver" value="123" />
			<input type="hidden" id = "platform" name="platform" value="" />
			<input type="hidden" id = "idToken" name="idToken" value="" />
			<input type="hidden" id = "country" name="country" value="" />
			<input type = "submit" name="btn" id = "btn" value = "Proceed to Checkout"/>
		</form>
        </div>
    )
    
}

export default CreditsPage;