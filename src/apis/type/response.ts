interface APIResponse<T> {
  code: string;
  data: T;
  message: string;
}

export default APIResponse;
