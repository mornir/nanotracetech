import PicoSanity from 'picosanity'
import imageUrlBuilder from '@sanity/image-url'

const sanity = {}

sanity.client = new PicoSanity({
  projectId: 'uxzcxr9o',
  dataset: 'production',
  apiVersion: '2022-06-15', // use a UTC date string
  useCdn: true,
})

const builder = imageUrlBuilder(sanity.client)

sanity.urlFor = function (source) {
  return builder.image(source)
}

export default sanity
