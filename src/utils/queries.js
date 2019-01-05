import fp from 'lodash/fp'

export const imageNodes = fp.pipe(
  fp.get('edges'),
  fp.map(fp.get('node')),
)

export const namedImages = fp.pipe(
  imageNodes,
  fp.map(node => [node.name, node]),
  fp.fromPairs,
)

export const objFromNamedArray = fp.pipe(
  fp.map(x => [x.name, x]),
  fp.fromPairs,
)

export const namedLinks = fp.pipe(
  objFromNamedArray,
  fp.mapValues(fp.get('href')),
)
