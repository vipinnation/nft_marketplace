import React from "react";
import SingleAsset from "../../components/SingleAsset";
import { useRouter } from "next/router";

const data = {
	id: 1,
	title: "The Rusty Robots",
	price: 4.5,
	owner: "0x1234567891235",
	creator: "0x1234567891235",
	category: "Gaming",
	image: "/nftSample.png",
	collection: "123",
	description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
};

const SingleNFTPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<SingleAsset data={data} />
		</>
	); 
};

export default SingleNFTPage;
