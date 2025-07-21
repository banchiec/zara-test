import { PRODUCT_CARD } from '../../constants';
import ProductCard from '../product-card/product-card';
import './card.scss';

const Card = () => {
  return (
    <div className="zara-test-card">
      <ProductCard
        imageUrl={PRODUCT_CARD.card01.imageUrl}
        details={PRODUCT_CARD.card01.details}
      />
      <div className="zara-test-card-info">
        <div>
          <p>{PRODUCT_CARD.card01.info.author}</p>
          <p>{PRODUCT_CARD.card01.info.description}</p>
          <p>{PRODUCT_CARD.card01.info.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
