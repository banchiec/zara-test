import { BackgroundImage } from '../background-image';
import type { ProductCardTypes } from './types';
import './product-card.scss';

const ProductCard = (props: ProductCardTypes) => {
  const { imageUrl, details } = props;
  return (
    <div className="zara-test-product-card">
      <BackgroundImage imageUrl={imageUrl} alt="Product Image" />
      <div className="zara-test-product-card-details">
        <h3>{details?.title}</h3>
        <p>{details?.brand}</p>
        <p>{details?.author}</p>
      </div>
    </div>
  );
};

export default ProductCard;
