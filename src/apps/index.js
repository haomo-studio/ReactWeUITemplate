import React, { Component } from 'react'

export default class Apps extends Component {
	render() {
		return (
			<div>
				<h1>Apps页面</h1>
				{this.props.children}
			</div>
		)
	}
}