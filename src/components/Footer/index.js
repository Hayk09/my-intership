import { Box, Link, ImageListItem, TextField } from "@mui/material";
import React from "react";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import { CssBaseline } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          mt: "100px",
          padding: "10px",
          boxShadow: "3",
          height: "190px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            mt: "-140px",
            ml: "700px",
          }}
        >
          Great
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            color: COLOR.yellow,
            mt: "-140px",
          }}
        >
          STAR
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.lobster,
            fontSize: FONTS.smoll,
            mt: MARGINS.mt,
            mt: "-140px",
          }}
        >
          GS
        </Box>
      </Box>
      <Box
        sx={{
          fontFamily: FONTFAMILY.montserrat,
          ml: "120px",
          mt: "-140px",
        }}
      >
        <Box>Address:Jrvej-Dzoraxbyur-Masiv</Box>
        <Box sx={{ mt: "30px" }}>PhoneNumber:+37496076091</Box>
      </Box>
      <Box
        sx={{
          ml: "680px",
          mt: "-50px",
        }}
      >
        <TextField
          sx={{ bgcolor: COLOR.yellow, width: "222px" }}
          placeholder="Search"
        />
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            mt: "10px",
            ml: "10px",
          }}
        >
          Made in 2022 in Armenia
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body2,
            ml: "1200px",
            mt: "-80px",
          }}
        >
          You can find me here :)
        </Box>
      </Box>
      <ImageListItem
        sx={{
          borderRadius: BORDRADIUS.xxl,
          width: "60px",
          ml: "1450px",
          mt: "-100px",
        }}
      >
        <Link href="https://www.instagram.com/">
          <ImageListItem>
            <img src="	https://www.danoneinstitute.org/wp-content/uploads/2020/06/insta-logo.png" />
          </ImageListItem>
        </Link>
        <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=1551277091&extra_1=s%7Cc%7C355201143755%7Ce%7Cfacebook%27%7C&placement=&creative=355201143755&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1551277091%26adgroupid%3D58439965909%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9070053%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoOxZrod8Lpfjdk4xo0R5v9U-qeumzJHEk2GpLlGekrg8mURLF6AsNAaApX-EALw_wcB">
          <ImageListItem
            sx={{
              width: "55px",
              ml: "2px",
            }}
          >
            <img src="	https://cdn.worldvectorlogo.com/logos/facebook-3-3.svg" />
          </ImageListItem>
        </Link>
        <Link href="https://www.whatsapp.com/?lang=ru://www.facebook.com/campaign/landing.php?campaign_id=1551277091&extra_1=s%7Cc%7C355201143755%7Ce%7Cfacebook%27%7C&placement=&creative=355201143755&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1551277091%26adgroupid%3D58439965909%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9070053%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoOxZrod8Lpfjdk4xo0R5v9U-qeumzJHEk2GpLlGekrg8mURLF6AsNAaApX-EALw_wcB">
          <ImageListItem>
            <img src="https://conniescomfortsuites.com/wp-content/uploads/2018/03/WHATSAPP-LOGO.png" />
          </ImageListItem>
        </Link>
      </ImageListItem>
    </Box>
  );
};

export default Footer;
