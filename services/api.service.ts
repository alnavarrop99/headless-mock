import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

export class ApiService {
  private api: AxiosInstance

  constructor(baseURL?: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.initializeInterceptors()
  }

  private initializeInterceptors() {
    // Request interceptor
    this.api.interceptors.request.use(
      config => {
        // You can add auth tokens here if needed
        // const token = localStorage.getItem('token')
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    // Response interceptor
    this.api.interceptors.response.use(
      response => {
        return response
      },
      error => {
        // Handle specific error codes
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('API Error:', error.response.status, error.response.data)

          // Handle 401 Unauthorized
          if (error.response.status === 401) {
            // Handle unauthorized (e.g., redirect to login)
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Network Error:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Request Error:', error.message)
        }

        return Promise.reject(error)
      }
    )
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(url, config)
    return response.data
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(url, data, config)
    return response.data
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(url, data, config)
    return response.data
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.delete(url, config)
    return response.data
  }

  public async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.patch(url, data, config)
    return response.data
  }
}

// Create a singleton instance
export const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL || '/api')
