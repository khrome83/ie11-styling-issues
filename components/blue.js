import React, { PropTypes } from 'react';

function Blue({ children }) {
  return (
    <span className="blue">
      { children }
      <style jsx>{`
        .blue {
          color: blue;
        }

        @media screen and (min-width: 40rem) {
          .blue {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </span>
  );
}

Blue.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blue;
