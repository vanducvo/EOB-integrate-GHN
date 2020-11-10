export default interface MessageResponse<T> {
  code: number,
  message?: string,
  data?: T
}
