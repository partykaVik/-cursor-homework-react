import React from 'react';
import like from '../../assets/img/icon/like.svg';
import comment from '../../assets/img/icon/comment.svg';
import retweet from '../../assets/img/icon/retweet.svg';
import share from '../../assets/img/icon/share.svg';

export default function Post(props) {
	return (
		<div className="Post">
			<div className="post-author-avatar">
				<img src={props.avatar} alt="not found" />
			</div>
			<div className="post-content">
				<div className="post-info">
					<div className="author-name">
						<h3>{props.name}</h3>
					</div>
					<div className="author-nickname">
						<h4>{props.nickname}</h4>
					</div>
					<div className="post-date">
						<h4>{props.date}</h4>
					</div>
				</div>
				<div className="post-text">
					<p>{props.text}</p>
				</div>
				<div className="post-image">
					<img src={props.photo} alt="" />
				</div>
				<div className="post-icon">
					<div className="post-icon-item">
						<img src={comment} alt="not found" />
						<span>{props.amountComment}</span>
					</div>
					<div className="post-icon-item">
						<img src={retweet} alt="not found" />
						<span>{props.amountRetweet}</span>
					</div>
					<div className="post-icon-item">
						<img src={like} alt="not found" />
						<span>{props.amountLike}</span>
					</div>
					<div className="post-icon-item">
						<img src={share} alt="not found" />
					</div>
				</div>
			</div>
		</div>
	);
}
