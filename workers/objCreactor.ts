import store from '../store';
import {isValidImageURL} from './utils';

export const SanitizeProduct = (payload: any) => {
  let product = [];
  try {
    for (let item of payload) {
      product.push({
        category_id: item.category_id,
        category_name: item.category_name,
        product_id: item.product_id,
        product_name: item.product_name,
        image: isValidImageURL(item.product_image),
        product_offer: item.product_offer,
        product_desc: item.product_description,
        price: item.product_price,
        hasExtra: item.product_price.length > 1 ? true : false,
        favourite: item.is_favourite === 1 ? true : false,
        percentage: item.product_percentage,
        product_status: item.product_status,
        product_rating: item?.product_rating,
        product_recommended: item.product_recommended,
        timeslot: item.timeslot,
      });
    }
    return product;
  } catch (err) {
    console.log('>>SanitizeProduct>>>------', err);
    return product;
  }
};
