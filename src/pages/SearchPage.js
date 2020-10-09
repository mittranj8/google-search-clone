import React from "react";
import { useStateValue } from "../StateProvider";
import Response from "./response";
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
        <h1>{term}</h1>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
