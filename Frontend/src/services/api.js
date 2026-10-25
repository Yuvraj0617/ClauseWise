import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 120000,
})

export async function analysePdf(file) {
  const formData = new FormData()
  formData.append('pdf', file)
  try {
    const response = await client.post('/analyse', formData)
    return response.data.data
  }
  catch (error) {
    throw new Error(error.response?.data?.error || error.message || 'The document could not be analysed.')
  }
}
