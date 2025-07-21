import type { BackgroundImageTypes } from './types';
import './background-image.scss';

const BackgroundImage = (props: BackgroundImageTypes) => {
  const { imageUrl, alt } = props;
  return (
    <img
      className="zara-image-background"
      data-testid="zara-image"
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};

export default BackgroundImage;
