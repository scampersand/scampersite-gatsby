import React from 'react'
import {Flex, Box} from '@rebass/grid/emotion'

import vars from '../variables'
import Image from './Image'

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {height: 100}
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
    this.setState({height: width / vars.logoAspect})
  }

  render() {
    const {props, state: {height}} = this
    return (
      <div css={{height}} ref={this.ref}>
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

const LogoGrid = ({images}) => {
  images = Object.keys(images)
    .sort()
    .map(k => images[k])
  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="start"
      mx={-(vars.logoGutter / 2)}
      my={`calc(-${vars.logoRowGutter} / 2)`}
    >
      {images.map(image => (
        <Box
          width={vars.logoColumns.map(n => 1 / n)}
          px={vars.logoGutter / 2}
          py={`calc(${vars.logoRowGutter} / 2)`}
          key={image.name}
        >
          <Logo image={image} />
        </Box>
      ))}
    </Flex>
  )
}

export default LogoGrid
