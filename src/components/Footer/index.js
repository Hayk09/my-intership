import React from "react";
import "./index.scss"
import pinterest from "../Assets/317731_pinterest_social_social media_icon 1.png"
import telegram from "../Assets/_x33_35-telegram.png"
import instagram from "../Assets/Instagram.png"
import facebook from "../Assets/f_1_.png"
import searchIcon from "../Assets/Vector (2).png"

const Footer = () => {
    return(
        <div className="div-1">
            <p className="address">Address:Dzoraxbyur,Barekamutyan 7st</p>
            <p className="phonenumber">Phone numbers: +37498 900 309, +374 430977373</p>
            <a href="http://localhost:3000/"><p className="logo"><b>WooDoo</b></p></a>
            <p className="privacypolicy">Terms of Use Privacy Policy</p>
            <input className="search" type="search" />
            <img className="searchIcon" src={searchIcon}/>
            <p className="WD">© 2022 WooDoo</p>
            <p className="media">Find us in social media</p>
            <a href="https://www.pinterest.com/"><img className="pinterest" src={pinterest} /></a>
            <a href="https://web.telegram.org/z/"><img className="telegram" src={telegram} /></a>
            <a href="https://www.instagram.com/"><img className="instagram" src={instagram} /></a>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1551277091&extra_1=s%7Cc%7C355201143758%7Ce%7Cfacebook%27%7C&placement=&creative=355201143758&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1551277091%26adgroupid%3D58439965909%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9070053%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAyPyQBhB6EiwAFUuakjARRutg1aqNBVI_HR8-ktlZWj6ATxQeozR0zcnG_g3TJpvsJbQFLRoCj2EQAvD_BwE">
                <img className="facebook" src={facebook} />
            </a>
        </div>
    )
}

export default Footer