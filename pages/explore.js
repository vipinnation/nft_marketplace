import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { Box, Container, Typography } from "@mui/material";
import SelectComponent from "../components/SelectComponent";
import SelectMultipleComponent from "../components/SelectMultipleComponent";
import CollectionsGrid from "../components/CollectionsGrid";
import SingleNftComponent from "../components/SingleNftComponent";
import CollectionItem from "../components/CollectionItem";
import CategoryMenu from "../components/CategoryMenu";

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

const collectionData = [
  {
    id: 1,
    title: "World of Women Galaxy",
    creator: "0x1234567891235",
    price: 0.218,
    image: "/nftSample.png",
  },
  {
    id: 2,
    title: "Azuki #958",
    price: 0.218,
    creator: "0x1234567891235",
    image: "/nftSample.png",
  },
  {
    id: 3,
    title: "Yolk Folks",
    price: 0.218,
    creator: "0x1234567891235",
    image: "/nftSample.png",
  },
  {
    id: 4,
    title: "Earth Mooncake",
    price: 0.218,
    creator: "0x1234567891235",
    image: "/nftSample.png",
  },
  {
    id: 5,
    title: "Corrupt Floppy Disk",
    price: 0.218,
    creator: "0x1234567891235",
    image: "/nftSample.png",
  },
  {
    id: 6,
    price: 0.218,
    creator: "0x1234567891235",
    title: "Ape Episode #128",
    image: "/nftSample.png",
  },
  {
    id: 7,
    title: "Neo R #028",
    price: 0.218,
    creator: "0x1234567891235",
    image: "/nftSample.png",
  },
  {
    id: 8,
    price: 0.218,
    creator: "0x1234567891235",
    title: "Yact Mutant Academy",
    image: "/nftSample.png",
  },
];

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterOptions = [
    "All",
    "Single",
    "Collection",
    "Collection 1",
    "Collection 2",
    "Collection 3",
    "Art",
    "Gaming",
    "Photography",
    "Sports",
  ];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to low",
    "Name",
    "Newest",
    "Oldest",
  ];

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

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
        };
        return item;
      })
    );
    console.log("items", items);
    setNfts(items);
    setIsLoading(false);
  }
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    console.log("nft", nft);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    let tx =  await transaction.wait();
    console.log('transaction' , transaction)
    console.log('tx' , tx)
    loadNFTs();
  }

  return (
    <>
      <Container maxWidth="lg">
        {!isLoading && nfts.length == 0 ? (
          <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>
        ) : (
          <Box
            sx={{
              my: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: ["column-reverse", "row"],
                gap: [4, 0],
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" color="inherit"></Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SelectMultipleComponent
                  name="Filter"
                  options={filterOptions}
                />
                <SelectComponent name="Sort" options={sortOptions} />
              </Box>
            </Box>
            <Box
              sx={{
                my: 8,
              }}
            >
              <CollectionsGrid>
                {nfts.map((nft) => (
                  <SingleNftComponent
                    nft={nft}
                    key={nft.tokenId}
                    id={nft.tokenId}
                    buyNft={buyNft}
                    {...nft}
                  />
                ))}
              </CollectionsGrid>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
