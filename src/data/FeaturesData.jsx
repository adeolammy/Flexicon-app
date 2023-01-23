import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Mobile Apps / Best Security',
		description: ' Design and development of mobile applications --Native app development Cross-platform app development --Mobile backend development --Mobile apps UI/UX design --We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Consulting services',
		description: 'in the development of modern mobile solutions.  - Technical analysis and project evaluation  - Research and development for a pilot project - Development of the architecture of the future product  - We will check the product concept is viable, workable and usable.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'MVP for a Startup',
		description: 'Development of the first version of a startup app  - Testing product hypotheses with real data  - Identify trends that can be used in production  - Prioritization important and identifying unclaimed features  - Collect user base before full-scale launch ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];