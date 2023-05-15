import React from 'react'

export default function Details() {
	return (
		<div className="details">

			<div className="title-container">
				<h1>Contact Me</h1>
			</div>

			<div className="details-container">
				<div className="detail">
					<h2>Email</h2>
					<h3>grahamben7@gmail.com</h3>
				</div>
				<div className="detail">
					<h2>Mobile</h2>
					<h3>(+27) 71 442 0883</h3>
				</div>
				<div className="detail">
					<h2>Github</h2>
					<h3 ><a className="github-link" href="https://github.com/bengraham-B">Github Account</a></h3>
				</div>
				<div className="detail">
					<h2>LinkedIn</h2>
					<h3 ><a className="github-link" href="https://www.linkedin.com/in/ben-graham-822315267/">LinkedIn Profile</a></h3>
				</div>
				<div className="detail-address">
					<h2>Address</h2>
					<div className="address-info">
						<h3 className="address-h3">10 Wingered Road</h3>
						<h3 className="address-h3">Somerste West</h3>
						<h3 className="address-h3">7130</h3>
						<h3 className="address-h3">Cape Town</h3>
						<h3 className="address-h3">South Africa</h3>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.details{
						width: 400px;
						min-height: 600px;
						max-height: auto;

						margin: 30px;

						background: grey;

					}

					.title-container {


					}

					.detail {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: row;

					}
					h2{
						margin: 12.5px;
					}
				
					h3{
						margin: 12.5px;
					}

					.github-link {
						text-decoration: none;
						color: white;
					}

					.github-link:hover {
						color: blue;
					}

					.detail-address {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
					}

					.address-h3 {
						text-align: center;
					}
				
				`}
			</style>
			
		</div>
	)
}
