import styled from 'styled-components';
import { Button } from '../../globalStyle'

export const HeroSection = styled.section`
	color: black;
	height: 100vh;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	background-size: cover;
	background-repeat: no-repeat;
	z-index:8;
	background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22388.403%22 height=%22402.%22 viewBox=%220.367 735.306 654.403 125.226%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M559.5 687Q284 874 325.5 572T601 385q234 115-41.5 302Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.45 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%236c3b80%22 d=%22M559.5 687Q284 874 325.5 572T601 385q234 115-41.5 302Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
		
	@media screen and (max-width: 568px) {
		background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22388.403%22 height=%22402.%22 viewBox=%2299.367 635.306 554.403 60.226%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M559.5 687Q284 874 325.5 572T601 385q234 115-41.5 302Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.45 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%236c3b80%22 d=%22M559.5 687Q284 874 325.5 572T601 385q234 115-41.5 302Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	 
	}

`;


export const HeroImg = styled.img`
	width: 40%;
	height: 55%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	margin-top:-43px;
	right: 20px;
	position: absolute;
	z-index: 1;
	@media screen and (max-width: 568px) {
	    right: 40px;
		width: 80%;
		height: 33%;
		margin-top: 10rem;
		text-align:center;
		top: 9.8rem;
	
	}
	@media screen and (max-width: 968px) {
		top: 9.8rem;
	
	}
`;

export const HeroText = styled.p`
	margin: 55px 0;
	font-size: clamp(0.9rem, 1.5vw, 1.2rem);
	line-height: 24px;
	
	letter-spacing: 2.7px;
	color: black;
	width: 50%;
	@media screen and (max-width: 968px) {
		width: 50%;
		margin-top: -1rem;
		text-align:center;
		font-size:1rem;
		margin-bottom: 2.2rem;
	}
	@media screen and (max-width: 568px) {
		width: 100%;
		margin-top: -1.5rem;
		text-align:center;
		font-size:0.8rem;
		margin-bottom: 12.8rem;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	backgroundColor:lightgray;
	color: black;
		z-index:42;
	&:before {
		height: 500%;
		z-index:-1;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		border: 2px solid black;
	}
	
`;