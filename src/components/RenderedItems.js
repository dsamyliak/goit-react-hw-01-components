import PropTypes from "prop-types";

import Profile from "./Profile";
import user from "../user.json";
import Statistics from "./Statistics";
import data from "../data.json";

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
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
}

RenderedItems.propTypes = {};

export default RenderedItems;
