import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";
import ETH from "../public/eth.svg";
import { ColoredBgButton } from "../styles/styledComponents"; 

const SingleNftComponent = ({
  id,
  title,
  price,
  creator,
  image,
  nft,
  action,
  listNFT,
  buyNft,
  tokenId,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          raised
          sx={{
            maxWidth: "300px",
            mx: "auto",
            borderRadius: 2,
            padding: 1.5,
            position: "relative",
            minWidth: "200px",
          }}
        >
          <Link href={`/nft/${id}`}>
            <a>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={image}
                  alt="nft name"
                  sx={{
                    borderRadius: 2,
                  }}
                />
                <CardContent
                  sx={{
                    borderRadius: 2,
                    padding: "0",
                    background: "transparent",
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          mr: 1,
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.pravatar.cc/300"
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          component="div"
                          fontWeight="bold"
                          sx={{
                            textTransform: "uppercase",
                          }}
                          mb={0.5}
                        >
                          {nft && nft.name}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                          By  {nft && nft.owner}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 1,
                      px: 3,
                      py: 1.5,
                      pt: 0,
                    }}
                  >
                    <Typography variant="subtitle2" color="text.secondary">
                      Price
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ETH />
                      {price} ETH
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{
                          alignSelf: "end",
                        }}
                      >
                        ( {price * 3.5} USD)
                      </Typography>
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </a>
          </Link>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {action === "resell" ? (
              <ColoredBgButton
                color="white"
                onClick={() => listNFT(nft)}
                sx={{
                  borderRadius: 1,
                  py: 1,
                  px: 2,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                List item
              </ColoredBgButton>
            ) : action === "view" ? (
              <Link href={`nft/${tokenId}`}>
                <ColoredBgButton
                  color="white"
                  sx={{
                    borderRadius: 1,
                    py: 1,
                    fontWeight: "bold",
                    px: 2,
                    flex: 1,
                  }}
                >
                  View item
                </ColoredBgButton>
              </Link>
            ) : (
              <ColoredBgButton
                color="white"
                sx={{
                  borderRadius: 1,
                  py: 1,
                  fontWeight: "bold",
                  px: 2,
                  flex: 1,
                }}
                onClick={() => buyNft(nft)}
              >
                Buy Now
              </ColoredBgButton>
            )}

            {action !== "view" && (
              <Button
                color="white"
                sx={{
                  position: "relative",
                  borderRadius: 1,
                  border: "1px solid transparent",
                  padding: "0",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box , border-box",
                  backgroundImage: (theme) =>
                    `linear-gradient(${theme.palette.bg.main},${theme.palette.bg.main}), radial-gradient(circle at top left, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
                }}
              >
                <Box sx={{ py: 1, px: 2 }}>
                  <Link href={`/nft/${tokenId}`}>View Info</Link>
                </Box>
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default SingleNftComponent;
