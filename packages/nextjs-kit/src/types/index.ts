export enum ASC {
  ASC = 'ASC',
  asc = 'asc',
}
export enum DESC {
  DESC = 'DESC',
  desc = 'desc',
}

export interface DataToSort {
  data: Array<Record<string, string | number>>;
  key: string;
  direction: string;
}
