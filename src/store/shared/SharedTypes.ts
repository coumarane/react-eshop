// store/shared/SharedTypes.ts
export interface IPayload<T> {
  data?: T;
  datas?: T[];
  error?: any;
  loading?: boolean;
}
