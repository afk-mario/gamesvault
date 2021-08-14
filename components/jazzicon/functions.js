import Color from 'color';

const wobble = 30;

export function genColor(generator, colors) {
  generator.random();
  const idx = Math.floor(colors.length * generator.random());
  const color = colors.splice(idx, 1)[0];
  return color;
}

export function hueShift(colors, generator) {
  const amount = generator.random() * 30 - wobble / 2;
  return colors.map((hex) => {
    const color = Color(hex);
    color.rotate(amount);
    return color.hex();
  });
}

export function genShape(generator, remainingColors, diameter, i, total) {
  const center = diameter / 2;
  const firstRot = generator.random();
  const angle = Math.PI * 2 * firstRot;
  const velocity =
    (diameter / total) * generator.random() + (i * diameter) / total;
  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity;
  const translate = `translate(${tx} ${ty})`;

  // Third random is a shape rotation on top of all of that.
  const secondRot = generator.random();
  const rot = firstRot * 360 + secondRot * 180;
  const rotate = `rotate(${rot.toFixed(1)} ${center} ${center})`;
  const transform = `${translate} ${rotate}`;
  const fill = genColor(generator, remainingColors);

  return (
    <rect
      key={i}
      x="0"
      y="0"
      rx="0"
      ry="0"
      height={diameter}
      width={diameter}
      transform={transform}
      fill={fill} // todo: make prop
    />
  );
}

export function jsNumberForAddress(address) {
  const addr = address.slice(2, 10);
  return parseInt(addr, 16);
}
