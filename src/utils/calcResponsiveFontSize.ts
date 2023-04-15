import removeUnits from './removeUnits';

export default function calcResponsiveFontSize(
  windowWidth: number,
  windowBaseWidth: number,
  baseRemFontSize: string | number
) {
  const fontSize = removeUnits(baseRemFontSize);
  const responsiveFontSize =
    windowWidth < windowBaseWidth
      ? fontSize * (windowWidth / windowBaseWidth)
      : fontSize;
  return `${responsiveFontSize}rem`;
}
