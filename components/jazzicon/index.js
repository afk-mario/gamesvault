import PropTypes from 'prop-types';
import MersenneTwister from 'mersenne-twister';

import colors from './colors';
import Paper from './paper';
import { genColor, hueShift, genShape } from './functions';

const shapeCount = 4;
const svgns = 'http://www.w3.org/2000/svg';

function Jazzicon({ diameter, paperStyles, seed, svgStyles }) {
  const generator = new MersenneTwister(seed);
  const remainingColors = hueShift(colors.slice(), generator);
  const shapesArr = Array(shapeCount).fill();

  return (
    <Paper
      color={genColor(generator, remainingColors)}
      diameter={diameter}
      style={paperStyles}
    >
      <svg
        xmlns={svgns}
        x="0"
        y="0"
        height={diameter}
        width={diameter}
        style={svgStyles}
      >
        {shapesArr.map((s, i) =>
          genShape(generator, remainingColors, diameter, i, shapeCount - 1)
        )}
      </svg>
    </Paper>
  );
}

Jazzicon.propTypes = {
  diameter: PropTypes.number,
  paperStyles: PropTypes.shape({}),
  seed: PropTypes.number.isRequired,
  svgStyles: PropTypes.shape({}),
};

Jazzicon.defaultProps = {
  diameter: 16,
  paperStyles: null,
  svgStyles: null,
};

export default Jazzicon;
