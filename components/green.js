import React, { PropTypes } from 'react';

function Green({ children }) {
  return (
    <span className="green">
      { children }
      <style jsx>{`
        .green {
          color: green;
        }

        @media screen and (min-width: 40rem) {
          .green {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </span>
  );
}

Green.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Green;
