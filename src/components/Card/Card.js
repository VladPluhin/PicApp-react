import React, { Component, useState } from 'react';
import classes from './Card.module.scss';
import PropTypes from 'prop-types';
import Like from '../Like/Like';


const Card = ({ photo }) => {
	const { user, urls } = photo;
	return (
		<div className={classes.card}>
			<div className={classes.cardImg}>
				<img className="img" src={urls.regular} />
			</div>
			<div className= {classes.cardBody}>
				<Like linkImage={urls.regular}/>
				<a href={`https://unsplash.com/@${user.username}`}
					className={classes.title}>
					{ user.name ? user.name: '' }
				</a>
				<time className={classes.date}
					dateTime={photo.created_at ? photo.created_at.slice(0,10): ''}>
					{photo.created_at ? photo.created_at.slice(0,10): ''}
				</time>
				<p>
					{photo.description ? photo.description: ''}
				</p>
			</div>
		</div>
	)
}
Card.propTypes={
	photo:PropTypes.shape({
		 urls: PropTypes.shape({
			regular: PropTypes.string
		 }),
		user: PropTypes.shape({
			name:PropTypes.string
		}),
	})
}
export default Card;

