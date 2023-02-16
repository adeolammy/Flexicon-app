import React from 'react';

import { BsCreditCard ,BsFillBagFill, BsFillPeopleFill} from 'react-icons/bs';
// import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport} from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="2rem" color="#0f0f0f" />;

export const productsData = [
	{
		name: 'Robust User Management System',
		description: "Streamline your user management with our robust system. Ensure secure access control, automate user authentication and authorization, and manage user profiles with ease. Enhance your organization's efficiency and keep your data secure.",
		icon: iconStyle(BsCreditCard),
		imgClass: 'one',
	},
	{
		name: 'Customizable dashboard and reporting',
		description: "Transform your data into actionable insights with our customizable dashboard and reporting system. Create real-time reports, visualize data, and monitor key metrics. Get a clear overview of your organization's performance and make data-driven decisions.",
		icon: iconStyle(BsFillPeopleFill),
		imgClass: 'two',
	},
	{
		name: 'Robust backup and disaster recovery plan',
		description: "Protect your critical data and systems with our robust backup and disaster recovery plan. Automate regular backups, ensure fast recovery, and minimize downtime in case of disaster. Ensure the safety of your valuable data and keep your business running smoothly.",
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Access control and permissions management',
		description: "Secure your sensitive information with our access control and permissions management system. Control user access to resources, set granular permissions, and monitor user activity. Ensure the confidentiality of your data and maintain the privacy of your users.",
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Mobile optimization',
		description: "Stay connected and accessible with our mobile optimization solution. Enhance your website or application's functionality and user experience on mobile devices. Reach a wider audience and keep pace with the ever-growing trend of mobile usage.",
		icon: iconStyle(BsFillBagFill),
		imgClass: 'five',
	},
	{
		name: 'Secure data management and storage',
		description: "Protect your valuable data with our secure data management and storage solution. Ensure the safety of sensitive information, comply with industry standards, and manage data effectively. Keep your data secure and accessible, with peace of mind.",
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];