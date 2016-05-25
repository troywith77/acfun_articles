import React from 'react'

const Repo = ({params}) => {
	return (
		<h1>
			{params.userName + ' ' + params.repoName}
		</h1>
	)
}

export default Repo 