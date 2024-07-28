import axios from 'axios'

const axiosDiscover = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMyODgzYjA4ODZjZWJiN2Y2OTI5ODlhNWVmZmRiMiIsIm5iZiI6MTcxOTQ1NzgxOC4yMTE0ODEsInN1YiI6IjY2N2M3M2Y4OWQ2NWJlYTQwMGFhNzU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWkNMWOv6wMEnBVCtz08XMxAB-VCgujfzUCuvic00qs'
  }
})

export default axiosDiscover
