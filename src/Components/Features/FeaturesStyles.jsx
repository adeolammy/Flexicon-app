import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	z-index:8;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	z-index:8;
	
`;

export const FeatureWrapper = styled.div`
	background-image: url(./assests/features3.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	z-index:8;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	// background: transparent;
	// box-shadow: 0 0 32px 8px #d0d0d0;
	// border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	// color: white;
	margin-bottom: 1rem;
	padding: 8px;
		cursor:pointer;
	&:hover {
	border-radius: 50%;
	border: 0px solid #000;
	padding:8px;
	
	
        animation: rotate 5s linear infinite, color 5s ease-in-out infinite;
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes color {
        0% {
          background-color: #cCC0F9;
        }
        25% {
          background-color: gold;
        }
        50% {
          background-color: lightgreen;
        }
        75% {
          background-color: lightblue;
        }
        100% {
          background-color: lightgray;
        }
      }
	  }
`;
export const FeatureName = styled.h3`
	color: white;
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: justify;
	font-size: 1.1rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	// z-index:101;
	color: white;
	// @media screen and (max-width: 768px) {
	// 	display: none;
	// }
`;