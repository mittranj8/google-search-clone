import { Description, Image, LocalOffer, MoreVert, Room, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Response from "./response";
import Search from "./Search";
import "./SearchPage.css";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //   LIVE API Call
  //   const { data } = useGoogleSearch(term);

  //   using saved reponse to save custom search limit (mocked API call)
  const data = Response;

  console.log(data);

  //  https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
  //  https://cse.google.com/cse/create/new
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>

        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                 <SearchOutlined />
                 <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                 <Description />
                 <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                 <LocalOffer />
                 <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                 <Image />
                 <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                 <Room />
                 <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                 <MoreVert />
                 <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
            <div className="searchPage_option">
                 <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                 <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
