import React, { Component } from 'react'

export default class Pages extends Component {
	render() {
		return (
			<div>
				<h1>Pages页面</h1>
				{this.props.children}
			</div>
		)
	}
}