import React from 'react';
import { Star, ArrowBack, ArrowForward } from '@mui/icons-material';

const Testimonials = () => {
	return (
		<div className="Testimonials">
			<div className="TestHeader">
				<strong> Trusted by Thousands of</strong>
				<strong>Happy Customer</strong>
				<small>
					These are the stories of our customers who have joined us
					with great
				</small>
				<small>pleasure when using this crazy feature.</small>
			</div>
			<div className="TestBox">
				<div className="CoverBox">
					<div className="TextImg">
						<img src="./content/Ellipse 175.png" alt="" />
						<strong>
							Viezh Robert
							<br />
							<small>Warsaw, Poland</small>
						</strong>
						<div className="Rating">
							<strong> 4.5 </strong>
							<div className="Star">
								<Star fontSize="x-small" />
							</div>
						</div>
					</div>
					<small>
						"Wow... I am very happy to use this VPN, it turned out
						to be more than my expectations and so far there have
						been no problems. LaslesVPN always the best."
					</small>
				</div>
				<div className="CoverBox">
					<div className="TextImg">
						<img src="./content/Ellipse 175 (1).png" alt="" />
						<strong>
							Yessica Christy
							<br />
							<small>Shanxi, China</small>
						</strong>
						<div className="Rating">
							<strong> 4.5 </strong>
							<div className="Star">
								<Star fontSize="x-small" />
							</div>
						</div>
					</div>
					<small>
						"I like it because I like to travel far and still can
						connect with high speed"
					</small>
				</div>
				<div className="CoverBox">
					<div className="TextImg">
						<img src="./content/Ellipse 175 (2).png" alt="" />
						<strong>
							Kim Young Jou
							<br />
							<small>Seoul, South Korea</small>
						</strong>
						<div className="Rating">
							<strong> 4.5 </strong>
							<div className="Star">
								<Star fontSize="x-small" />
							</div>
						</div>
					</div>
					<small>
						"This is very unusual for my business that currently
						requires a vrtual private network that has high
						security."
					</small>
				</div>
			</div>
			<div className="BtmBtn">
				<div className="Slider">
					<div className="point1"></div>
					<div className="point"></div>
					<div className="point"></div>
					<div className="point"></div>
				</div>
				<div className="Btn">
					<button>
						<ArrowBack fontSize="small" />
					</button>
					<button>
						<ArrowForward fontSize="small" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
