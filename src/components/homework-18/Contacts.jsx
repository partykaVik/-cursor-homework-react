import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import { CgGenderMale } from 'react-icons/cg';
import { CgGenderFemale } from 'react-icons/cg';
import { BiQuestionMark } from 'react-icons/bi';

const contacts = [
	{
		id: 1,
		firstName: 'Барней',
		lastName: 'Стинсовський',
		phone: '+380956319521',
		gender: 'male',
	},
	{
		id: 2,
		firstName: 'Робін',
		lastName: 'Щербатська',
		phone: '+380931460123',
		gender: 'female',
	},
	{
		id: 3,
		firstName: 'Анонімний',
		lastName: 'Анонімус',
		phone: '+380666666666',
	},
	{
		id: 4,
		firstName: 'Лілія',
		lastName: 'Олдровна',
		phone: '+380504691254',
		gender: 'female',
	},
	{
		id: 5,
		firstName: 'Маршен',
		lastName: 'Еріксонян',
		phone: '+380739432123',
		gender: 'male',
	},
	{
		id: 6,
		firstName: 'Теодор',
		lastName: 'Мотсбес',
		phone: '+380956319521',
		gender: 'male',
	},
	{
		id: 7,
		firstName: 'Віктор',
		lastName: 'Партика',
		phone: '0937770777',
		gender: 'male',
	},
];

function Contacts() {
	const [search, setSearch] = useState('');
	const [filteredContacts, setFilteredContacts] = useState(contacts);

	useEffect(() => {
		setFilteredContacts(
			contacts.filter(contact => {
				return (
					contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
					contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
					contact.phone.includes(search)
				);
			})
		);
	}, [search, contacts]);
	const genderIcon = gender => {
		if (gender === 'male') return <CgGenderMale />;
		else if (gender === 'female') return <CgGenderFemale />;
		else return <BiQuestionMark />;
	};

	return (
		<div className="wrapper">
			<div className="Contacts">
				<div className="search">
					<input
						className="search"
						type="text"
						placeholder="Search contacts"
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
				<div className="contact-list">
					{filteredContacts.map(contact => (
						<Contact {...contact} gender={genderIcon(contact.gender)} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Contacts;
