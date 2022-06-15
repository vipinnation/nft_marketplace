import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { Box, Container, Typography } from "@mui/material";
import CollectionsGrid from "../components/CollectionsGrid";
import SingleNftComponent from "../components/SingleNftComponent";

const nftData = {
  tokenId: "1",
  price: "3.02",
  seller: "0x0000000000000000000000000000000000000000",
  owner: "0x0000000000000000000000000000000000000000",
  creator: "0x1234",
  image: "https://i.imgur.com/qhQY9xv.png",
  title: "Ape Episode #128",
  description: "this is a NFT",
};

export default function CreatorDashboard() {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadNFTs();
  }, [setNfts, setIsLoading]);

  //   useEffect(() => {
  //     var NFTArray = [];
  //     for (var i = 0; i < 10; i++) {
  //       NFTArray.push(nftData);
  //     }
  //     setNfts(NFTArray);
  //     setIsLoading(false);
  //   }, []);

  async function loadNFTs() {
    // const web3Modal = new Web3Modal({
    //   network: "mainnet",
    //   cacheProvider: true,
    // });
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await contract.fetchItemsListed();

    const items = await Promise.all(
      data.map(async (i) => {
        console.log("i", i);
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );

    console.log("Items", items);
    setNfts(items);
    setIsLoading(true);
  }
  if (isLoading && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No NFTs listed</h1>;
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 8,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bolder"
          sx={{
            mb: 1,
          }}
        >
          MY Listed NFTs
        </Typography>
        <Typography variant="h6" color="secondary">
          0x12345678
        </Typography>
      </Box>
      <CollectionsGrid>
        {nfts.map((nft) => (
          <SingleNftComponent
            action={"view"}
            key={nft.tokenId}
            id={nft.tokenId}
            {...nft}
          />
        ))}
      </CollectionsGrid>
    </Container>

    // <div>
    // 	<div className="p-4">
    // 		<h2 className="text-2xl py-2">Items Listed</h2>
    // 		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    // 			{nfts.map((nft, i) => (
    // 				<div key={i} className="border shadow rounded-xl overflow-hidden">
    // 					<img src={nft.image} className="rounded" />
    // 					<div className="p-4 bg-black">
    // 						<p className="text-2xl font-bold text-white">
    // 							Price - {nft.price} Eth
    // 						</p>
    // 					</div>
    // 				</div>
    // 			))}
    // 		</div>
    // 	</div>
    // </div>

    // <div className="flex justify-center">
    //   <div className="p-4">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    //       {nfts.map((nft, i) => (
    //         <div key={i} className="border shadow rounded-xl overflow-hidden">
    //           <img
    //             src={nft.image}
    //             alt="Picture of the author"
    //             className="rounded"
    //             width={350}
    //             height={500}
    //             // blurDataURL="data:..." automatically provided
    //             // placeholder="blur" // Optional blur-up while loading
    //           />
    //           <div className="p-4 bg-black">
    //             <p className="text-2xl font-bold text-white">
    //               Price - {nft.price} ETH
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
