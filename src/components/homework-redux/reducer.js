import worldOfEngineering from './../../assets/img/World_of_Engineering.jpg';
import worldOfEngineeringPost from './../../assets/img/World_of_Engineering_post.jpg';
import Nasa from './../../assets/img/Nasa_icon.jpg';
import nasaPost from './../../assets/img/Nasa_post.jpg';
import historyUkraine from './../../assets/img/history_ukraine.jpg';
import historyUkrainePost from './../../assets/img/history_ukraine_post.jpg';
import './../../style/homework-17.css';

const Authors = [
	{
		author: {
			name: 'History Ukraine',
			avatar: historyUkraine,
			nickname: '@History_Ukraine',
		},
		text: 'Село Яблінок (нині - Польща). Все українське населення було насильно переселене зі своїх прадавніх земель 1946-1947 рр.',
		image: historyUkrainePost,
		date: '26 Feb.',
	},
	{
		author: {
			name: 'NASA',
			avatar: Nasa,
			nickname: '@NASA',
		},
		text: 'One of the challenges of landing on the Moon is lunar dust – which can potentially destabilize the lander, damage instruments, and reduce visibility. @NASAKennedydid some digging to help minimize these dusty situations for future missions.',
		image: nasaPost,
		date: 'Aug 14, 2021',
	},
	{
		author: {
			name: 'World of Engineering',
			avatar: worldOfEngineering,
			nickname: '@engineers_feed',
		},
		text: 'This is the Lun-class ekranoplan, a formerly top-secret Soviet naval vessel that could skim just above the waves at jet-plane speeds, evading radar and anti-ship mines.',
		image: worldOfEngineeringPost,
		date: 'Aug 16, 2021',
	},
];

const initialState = {
	data: Authors,
	comment: 48,
	like: 234,
	repost: 16,
	isChanged: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'addNewPost': {
			return {
				data: [
					...state.data,
					{
						author: {
							name: action.info.author,
							avatar: Nasa,
							nickname: `@${action.info.author}`,
						},
						text: action.info.text,
						image: action.info.image,
						date: new Date().toString().slice(4, 16),
					},
				],
			};
		}

		default:
			return state;
	}
}
