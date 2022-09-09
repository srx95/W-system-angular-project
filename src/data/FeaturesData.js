import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
import {TiWiFi} from 'react-icons/ti'
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Najbolju sigurnost vaseg doma',
		description: 'Nasim korisnicima nudimo najbolja resenja sigurnosnih sistema',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Lakocu koriscenja',
		description: 'Nas sistem je jednostavan za koriscenje i integraciju',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Odrzavanje informacionih sistema',
		description: 'Osim izrade novih instalacija i isporuke nove opreme , nudimo i odrzavanje postojecih',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Projektovanje,postavljanje i konfiguracija mreza',
		description: 'Obavljamo poslove od kabliranja mrežne infrastrukture, povezivanja Vasih racunara, stampaca, servera i mreznih uređaja (zicni i bezicni pristup) u lokalnu mrezu (LAN), kao i konfigurisanje mrezne opreme.',
		icon: iconStyle(TiWiFi),
		imgClass: 'four',
	},
	{
		name: 'Cena',
		description: 'Nudimo najbolji odnos kvaliteta i cene',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Cloud poslovna resenja',
		description:'Cloud razvijen je sa idejom da vam na ekonimičan i bezbedan način omogući priliku da za svoje poslovanje koristite svetska poslovna rešenja. ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];