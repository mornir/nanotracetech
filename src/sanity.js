import PicoSanity from 'picosanity'

const sanity = new PicoSanity({
  projectId: 'uxzcxr9o',
  dataset: 'production',
  apiVersion: '2022-06-15', // use a UTC date string
  useCdn: true,
})

export default sanity
