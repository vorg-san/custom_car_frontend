import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router'

const Vote = () => {
	const collectionContract = '0xB0EA149212Eb707a1E5FC1D2d3fD318a8d94cf05'
	const tokenId = '106124913087373027493541693314242265135141833367690973383314684153082811514881'
	const getItemMetaByIdUrl = `https://api-dev.rarible.com/protocol/v0.1/ethereum/nft/items/${collectionContract}:${tokenId}/meta`;

	const [items, setItems] = useState();
	
	useEffect(() => {
		(async () => {
			const getItemMetaResult = await fetch(getItemMetaByIdUrl);
			const metaResultJson = await getItemMetaResult.json();
			console.log(metaResultJson)
			if (metaResultJson) {
				setItems([{id: `${collectionContract}:${tokenId}`, name: metaResultJson.name, description: metaResultJson.description, image: metaResultJson.image.url.ORIGINAL}])
			}
		})()
	}, []);

	return ( 
		<ul>
			{items?.map((i, index) => (
				<li key={index}>
					<img src={i.image} height='150'></img><br/>
					{i.description} 
				</li>
			))}
		</ul>
	 );
}
 
export default withRouter(Vote)