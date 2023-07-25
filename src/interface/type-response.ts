export interface IResponse {
  result: Boolean;
  status: number;
  message: String;
  data?: any;
  erro?: any;
  [key: string]: any;
}
