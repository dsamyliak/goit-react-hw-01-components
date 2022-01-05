import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <div className="allTasks">
      {title && <h1 className="title">{title}</h1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
