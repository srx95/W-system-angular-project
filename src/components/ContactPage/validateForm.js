export default function validateForm({ name, email}) {
	if (!name.trim()) {
		return 'Ime je neophodno!';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Upisite validno ime!';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'E-mail obavezan!';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email nije validan';
	}
	return null;
}