import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ productInfo }) => {
  const { id, title, price, slug, description } = productInfo
  return (
    <div>
      <h2>Buy The Book!</h2>
      <div  data-item-id={ id }
            data-item-name={ title }
            data-item-price={ price}
            data-item-url={ slug }
            data-item-description={ description }
      ></div>
    </div>
  )
}

Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
}


export default Product