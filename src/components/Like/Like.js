import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './Like.scss';
import State from "../../state/state";

const Like = ({linkImage}) => {
	
	const state = new State;
	return (
		<button className="icon-heart btn-like" 
		onClick={() => { state.getPreferItem(linkImage)}}>
		</button>
	)
}

export default Like;