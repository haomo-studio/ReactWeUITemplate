import React, { Component } from 'react'

export default class UI extends Component {
	render() {
		return (
			<div>
				<h1>UI页面</h1>
				{this.props.children}
			</div>
		)
	}
}