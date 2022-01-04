import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  <section className="statistics">
    <h2 className="title">{title || "Upload stats"}</h2>

    <ul className="stat-list">
      <li className="item">
        <span className="label">.docx</span>
        <span className="percentage">4%</span>
      </li>
      <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">14%</span>
      </li>
      <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">41%</span>
      </li>
      <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">12%</span>
      </li>
    </ul>
  </section>;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
