import React from 'react';

import { BsFillShieldLockFill ,BsClipboardData, BsCode, BsCloudUpload,BsPhone} from 'react-icons/bs';
// import { IoIosOptions } from 'react-icons/io';
// import { AiOutlineCloudUpload } from 'react-icons/ai';
import {FaHandsHelping } from 'react-icons/fa';
// import { GrVmMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="2rem" color="white" backgroundColor='gray'/>;

export const featuresData = [
	{
		name: 'Web Apps Training',
		description: "Learn to build and deploy web applications with our training school. Master the latest technologies, tools and frameworks to create interactive and scalable web apps. Get hands-on experience and start a fulfilling career in the tech industry.",
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Mobile App Training',
		description: "Unleash your creativity and develop mobile apps with our IT training school. Learn to build user-friendly, engaging and dynamic apps for iOS and Android. Get hands-on experience and launch a successful career in the fast-growing mobile app development industry.",
		// icon: iconStyle(IoIosOptions),
		icon: iconStyle(BsPhone),
		imgClass: 'two',
	},
	{
		name: 'Website Training',
		description: "Build a strong foundation in web development with our Mentorship Program. Learn to design, code and launch dynamic websites using modern technologies and tools. Gain hands-on experience and jumpstart your career in the fast-growing tech industry.",
		icon: iconStyle(BsCloudUpload),
		imgClass: 'three',
	},
	{
		name: 'Consulting services',
		description: "Take your IT career to the next level with our mentorship program's consulting services. Get personalized guidance from experienced industry professionals. Benefit from one-on-one support, tailored advice, and unique networking opportunities to advance your career in the tech industry.",
		icon: iconStyle(FaHandsHelping),
		imgClass: 'four',
	},
	{
		name: 'Data Sciences',
		description: "Learn data science by enrolling in our Mentorship Program. Learn how to analyze and understand large amounts of data, create prediction models, and solve real-world issues. With our extensive program, you may improve your abilities and boost your profession.",
		icon: iconStyle(BsClipboardData),
		// icon: iconStyle(BsCloudFill),
		imgClass: 'five',
	},
	{
		name: 'Project Management',
		description: "Unlock your potential in project management with our training Institute. Master the art of leading complex projects, utilizing agile methodologies and tools, and delivering results. Build a successful career and make an impact in any industry.",
		icon: iconStyle(BsCode),
		// icon: iconStyle(FaHandsHelping),
		// icon: iconStyle(BsCloudUpload),
		imgClass: 'six',
	},

];