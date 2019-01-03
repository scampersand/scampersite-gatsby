import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from '@rebass/grid/emotion'

import Image from './Image'

class ImageGridImage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {measuredWidth: 0}
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    const {width} = this.ref.current.getBoundingClientRect()
    this.setState({measuredWidth: width})
  }

  render() {
    const {
      props: {aspect, ...props},
      state: {measuredWidth},
    } = this
    const aspectHeight = measuredWidth / aspect
    return (
      <div css={{height: aspectHeight}} ref={this.ref}>
        <Image
          style={{height: '100%'}}
          imgStyle={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
            filter: 'grayscale(100%)',
          }}
          {...props}
        />
      </div>
    )
  }
}

ImageGridImage.propTypes = {
  aspect: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
}

const ImageGrid = ({images, order, columns, gutter, rowGutter, aspect}) => {
  if (!Array.isArray(columns)) {
    columns = [columns]
  }
  const width = columns.map(n => 1 / n) // for styled-system
  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="start"
      mx={-(gutter / 2)}
      my={`calc(-${rowGutter} / 2)`}
    >
      {images.map(image => (
        <Box
          width={width}
          px={gutter / 2}
          py={`calc(${rowGutter} / 2)`}
          key={image.name}
          order={order.map(o => o[image.name] || 0)}
        >
          <ImageGridImage aspect={aspect} image={image} />
        </Box>
      ))}
    </Flex>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.arrayOf(PropTypes.object),
  gutter: PropTypes.number.isRequired,
  rowGutter: PropTypes.string.isRequired,
  aspect: PropTypes.number.isRequired,
}

ImageGrid.defaultProps = {
  order: [],
}

export default ImageGrid
