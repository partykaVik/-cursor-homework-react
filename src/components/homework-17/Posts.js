import Post from './Post';
import worldOfEngineering from './../../assets/img/World_of_Engineering.jpg';
import worldOfEngineeringPost from './../../assets/img/World_of_Engineering_post.jpg';
import Nasa from './../../assets/img/Nasa_icon.jpg';
import nasaPost from './../../assets/img/Nasa_post.jpg';
import historyUkraine from './../../assets/img/history_ukraine.jpg';
import historyUkrainePost from './../../assets/img/history_ukraine_post.jpg';
import './../../style/homework-17.css';

export const Authors = [
	{
		id: 1,
		name: 'History Ukraine',
		avatar: historyUkraine,
		nickname: '@History_Ukraine',
		date: 'Aug 15, 2021',
		text: 'Село Яблінок (нині - Польща). Все українське населення було насильно переселене зі своїх прадавніх земель 1946-1947 рр.',
		photo: historyUkrainePost,
		amountComment: 7,
		amountRetweet: 194,
		amountLike: 285,
	},
	{
		id: 2,
		name: 'World of Engineering',
		avatar: worldOfEngineering,
		nickname: '@engineers_feed',
		date: 'Aug 16, 2021',
		text: 'This is the Lun-class ekranoplan, a formerly top-secret Soviet naval vessel that could skim just above the waves at jet-plane speeds, evading radar and anti-ship mines.',
		photo: worldOfEngineeringPost,
		amountComment: 350,
		amountRetweet: 124,
		amountLike: 2350,
	},
	{
		id: 3,
		name: 'NASA',
		avatar: Nasa,
		nickname: '@NASA',
		date: 'Aug 14, 2021',
		text: 'One of the challenges of landing on the Moon is lunar dust – which can potentially destabilize the lander, damage instruments, and reduce visibility. @NASAKennedydid some digging to help minimize these dusty situations for future missions.',
		photo: nasaPost,
		amountComment: 15,
		amountRetweet: 265,
		amountLike: 3039,
	},
];

export function Posts() {
	return (
		<div className="App">
			<div className="container">
				{Authors.map(author => (
					<Post key={author.id} {...author} />
				))}
			</div>
			<div className="container"></div>
		</div>
	);
}
