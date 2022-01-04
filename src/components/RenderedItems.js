import PropTypes from "prop-types";

import Profile from "./Profile";
import user from "../user.json";

function RenderedItems() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

RenderedItems.propTypes = {};

export default RenderedItems;
