import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const ProductTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const ProductWrapper = styled.div`
	text-align: center;
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

export const ProductColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
	cursor:pointer;
`;

export const ProductImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 10px;
	cursor:pointer;
	&:hover {
	border-radius: 50%;
	border: 2px solid #000;
	
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
export const ProductName = styled.h3`
	font-weight: 800;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 800;
		font-size: 1.3rem;
		letter-spacing: 1.3px;
	}
`;
export const ProductText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: black;
	// @media screen and (max-width: 768px) {
	// 	display: none;
	// }
`;