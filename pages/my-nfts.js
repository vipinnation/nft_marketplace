import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import CollectionsGrid from "../components/CollectionsGrid";
import SingleNftComponent from "../components/SingleNftComponent";
import { Box, Container, Typography } from "@mui/material";

import { marketplaceAddress } from "../config";
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

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
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
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
          tokenUri,
        };
        return item;
      })
    );
    setNfts(items);
    setIsLoading(true);
  }
  function listNFT(nft) {
    console.log("NFT", nft);
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenUri}`);
  }
  if (isLoading && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No NFTs owned</h1>;
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
          MY Owned NFTs
        </Typography>
        <Typography variant="h6" color="secondary">
          0x12345678
        </Typography>
      </Box>
      <CollectionsGrid>
        {nfts.map((nft) => (
          <SingleNftComponent
            nft={nft}
            listNFT={listNFT}
            action={"resell"}
            key={nft.tokenId}
            id={nft.tokenId}
            {...nft}
          />
        ))}
      </CollectionsGrid>
    </Container>
  );
}

/**
 * <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img src={nft.image} className="rounded" />
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">
                  Price - {nft.price} Eth
                </p>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => listNFT(nft)}
                >
                  List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 */
