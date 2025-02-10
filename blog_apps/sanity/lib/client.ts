import { ClientPerspective, createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // token: process.env.SANITY_API_KEY as string,
  perspective: 'published' as ClientPerspective,
  token,
})
