export interface SortParams {
  sort: string;
  order: string;
}

export interface PageParams {
  limit: number;
  offset: number;
}

export interface Params extends SortParams, PageParams {
  domain: string;
  state: string;
  displaycount: string;
}

export interface Row {
  id: number;
  domain: string;
  state: string;
}

export interface Data {
  rows: Row[];
  total: number;
}

export interface StoreState {
  params: Params;
  data: Data;
  loading: boolean;
}

export const InitParams = (): Params => {
  return {
    domain: '',
    state: '',
    displaycount: '',
    sort: '',
    order: '',
    limit: 5,
    offset: 0,
  };
};

export const InitData = (): Data => {
  return {
    rows: [],
    total: 0,
  };
};

export const InitStoreState = (): StoreState => {
  return {
    params: InitParams(),
    loading: false,
    data: InitData(),
  };
};
