import { WhereFilterOp } from 'firebase/firestore';

export type FirestoreQueryFilter<T> = {
  field: keyof T;
  operator: WhereFilterOp;
  value: string | string[] | number | boolean;
  limit?: number;
};
