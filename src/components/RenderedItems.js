import PropTypes from "prop-types";

import Profile from "./Profile";
import user from "../user.json";

export default function RenderedItems() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

RenderedItems.propTypes = {};
