interface SanctumResponse {
  isFinished: boolean
  statusCode: number | null
  response: Response | null
  asJson: () => any
  error: any
  data: any
  isFetching: boolean
}

export default interface Requester {
  login: (credentials: Record<string, string | number>) => Promise<SanctumResponse>,
  register: (credentials: Record<string, string | number>) => Promise<SanctumResponse>,
  logout: () => Promise<SanctumResponse>,
  fetchCsrfToken: () => Promise<SanctumResponse>,
  getUser: () => Promise<SanctumResponse>
}

export {
  SanctumResponse
}