import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ productInfo }) => {
  const { id, title, price, slug, description } = productInfo

  console.log('productinfo', productInfo);
  console.log('id', id);
  console.log('title', title);
  console.log('price', price);
  console.log('slug', slug);
  console.log('description', description);
  
  return (
    <div>
      <button  data-item-id={ id }
            data-item-name={ title }
            data-item-price={ price}
            data-item-url={ slug }
            data-item-description={ description }
      >Buy now</button>
    </div>
  )
}

Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
}


export default Product