import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './Like.scss';
import State from "../../state/state";

const Like = ({onHangleClick}) => {
	return (
		<button className="icon-heart btn-like" 
				onClick={ onHangleClick }>
		</button>
	)
}

export default Like;