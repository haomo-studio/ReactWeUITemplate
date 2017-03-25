import React, { Component } from 'react'

export default class Widgets extends Component {
	render() {
		return (
			<div>
				<h1>Widgets页面</h1>
				{this.props.children}
			</div>
		)
	}
}