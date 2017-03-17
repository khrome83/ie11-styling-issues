import React, { PropTypes } from 'react';

function Purple({ children }) {
  return (
    <span className="purple">
      { children }
      <style jsx>{`
        .purple {
          color: purple;
        }

        @media screen and (min-width: 40rem) {
          .purple {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </span>
  );
}

Purple.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Purple;
