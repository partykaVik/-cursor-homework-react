import React from 'react';
import { IoMdContact } from 'react-icons/io';

function Contact(props) {
	return (
		<div className="Contact">
			<div className="contact-info">
				<div className="contact-photo">{<IoMdContact />}</div>
				<div className="name-pnone">
					{props.firstName} {props.lastName}
					<p>{props.phone}</p>
				</div>
				<div className="gender">{props.gender}</div>
			</div>
		</div>
	);
}

export default Contact;
