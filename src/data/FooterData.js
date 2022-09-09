import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		url:"https://www.facebook.com/WSystem23",
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		url:"https://www.instagram.com/w__system/",
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		url:"https://www.youtube.com/watch?v=zCasnffmTts",
	},
];

export const footerData = [
	{
		title: 'Radno vreme',
		links: ['Ponedeljak: 08 - 17h', 'Utorak: 08 - 17h', 'Sreda: 08 - 17h', 'Cetvrtak: 08 - 17h','Petak: 08 - 17h','Subota: 08 - 14h','Nedelja: ZATVORENO',<br/>],
	},
	{
		title: 'Usluge',
		links: ['Alarmni sistemi', 'Video nadzor','Zaštita od požara', 'Clouding', 'Odrzavanje informacionih sistema','Projektovanje, postavljanje i konfiguracija mreza','	Postavljanje električnih instalacija'],
	},
	{
		title: 'Kontakt',
		links: ['Telefon: (+381)63321050', 'E-mail: info@w-system.co.rs',<br/>,<br/>,<br/>,<br/>,<br/>,<br/>],
	},
];