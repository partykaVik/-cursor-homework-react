import '../../style/homework-17.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import like from '../../assets/img/icon/like.svg';
import comment from '../../assets/img/icon/comment.svg';
import retweet from '../../assets/img/icon/retweet.svg';
import share from '../../assets/img/icon/share.svg';

function PostCreate() {
	const [text, setText] = useState('');
	const [image, setImage] = useState('');
	const [author, setAuthor] = useState('History Ukraine');
	const dispatch = useDispatch();

	const addPost = {
		type: 'addNewPost',
		info: {
			text,
			image,
			author,
		},
	};

	return (
		<div>
			<form>
				<input
					type="text"
					required
					placeholder="Text *"
					value={text}
					onChange={e => {
						setText(e.target.value);
					}}
				></input>
				<input
					type="text"
					reqired
					placeholder="Link to the image *"
					value={image}
					onChange={e => {
						setImage(e.target.value);
					}}
				></input>
				<select
					as="author"
					value={author}
					onChange={e => {
						setAuthor(e.target.value);
					}}
				>
					<option value="0">History Ukraine</option>
					<option value="1">NASA</option>
					<option value="2">World of Engineering</option>
				</select>

				<input
					type="submit"
					value="Add post"
					onClick={e => {
						e.preventDefault();
						dispatch(addPost);
						setText('');
						setImage('');
					}}
				/>
			</form>
		</div>
	);
}
function Author({ user, date }) {
	return (
		<div className="post-info">
			<div className="post-author-avatar">
				<img src={user.avatar} alt="not found" />
			</div>
			<div className="author-name">
				<h3>{user.name}</h3>
			</div>
			<div className="author-nickname">
				<h4>{user.nickname}</h4>
			</div>
			<div className="post-date">
				<h4>{date}</h4>
			</div>
		</div>
	);
}

function Content(props) {
	return (
		<div className="content">
			<div className="post-text">
				<p>{props.text}</p>
			</div>
			<div className="post-image">
				<img src={props.image} alt="" />
			</div>
		</div>
	);
}
function Post({ item }) {
	return (
		<div className="Post">
			<div className="post-content">
				<div className="container">
					<Author user={item.author} date={item.date} />
					<Content text={item.text} image={item.image} />
				</div>
				<div className="post-icon">
					<div className="post-icon-item">
						<img src={comment} alt="not found" />
						<span>12</span>
					</div>
					<div className="post-icon-item">
						<img src={retweet} alt="not found" />
						<span>150</span>
					</div>
					<div className="post-icon-item">
						<img src={like} alt="not found" />
						<span>250</span>
					</div>
					<div className="post-icon-item">
						<img src={share} alt="not found" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default function AddedNewForm() {
	const postsArr = useSelector(state => state.data);
	return (
		<>
			{postsArr.map(item => (
				<Post key={item.text} item={item} />
			))}
			<PostCreate />
		</>
	);
}
