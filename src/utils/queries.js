import _ from 'lodash'

export const imageNodes = images =>
  _(images.edges)
    .map(({node}) => node)
    .value()

export const namedImages = images =>
  _(imageNodes(images))
    .map(node => [node.name, node])
    .fromPairs()
    .value()
