import fp from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import {FlexGrid, Image, NamedLink} from '.'

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
      props: {aspect, imgStyle, link, ...props},
      state: {measuredWidth},
    } = this
    const aspectHeight = measuredWidth / aspect
    let image = (
      <Image
        style={{height: '100%'}}
        imgStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          ...imgStyle,
        }}
        {...props}
      />
    )
    if (link) {
      image = <NamedLink name={link}>{image}</NamedLink>
    }
    return (
      <div css={{height: `${aspectHeight}px`}} ref={this.ref}>
        {image}
      </div>
    )
  }
}

ImageGridImage.propTypes = {
  aspect: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
}

export const ImageGrid = ({
  aspect,
  colProps,
  images,
  imageProps,
  linked,
  order,
  ...props
}) => {
  return (
    <FlexGrid alignItems="center" justifyContent="start" {...props}>
      {images.map(image => {
        const flexOrder = fp.mapValues(o => o[image.name] || 0, order)
        return (
          <FlexGrid.Col
            span={1}
            {...colProps}
            key={image.name}
            order={flexOrder}
          >
            <ImageGridImage
              {...imageProps}
              aspect={aspect}
              image={image}
              link={linked && image.name}
            />
          </FlexGrid.Col>
        )
      })}
    </FlexGrid>
  )
}

ImageGrid.propTypes = {
  aspect: PropTypes.number.isRequired,
  colProps: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageProps: PropTypes.object,
  order: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number)),
}

ImageGrid.defaultProps = {
  order: [],
}
