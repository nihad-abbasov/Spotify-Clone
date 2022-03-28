import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountBox from "@mui/icons-material/AccountBox";
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>

      <div className="header__right">
          <AccountBox alt={user?.display_name} src={user?.images[0]?.url}  />
          <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
