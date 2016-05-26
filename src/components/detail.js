import React from 'react'

const Detail = ({
	content,
	title
}) => {
	return(
		<div>
    		<ul>
    			{list}
    		</ul>
    		<h1>{title}</h1>
      	<p dangerouslySetInnerHTML={{__html: content}}></p>
    </div>
	)
}

export default Detail
