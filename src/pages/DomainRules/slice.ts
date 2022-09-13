import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store/store';
import {
  InitStoreState,
  Params,
  StoreState,
  Data,
  SortParams,
  PageParams,
} from './const';

const slice = createSlice({
  name: 'domainRules',
  initialState: InitStoreState(),
  reducers: {
    changeDomain: (state: StoreState, action: PayloadAction<string>) => {
      state.params.domain = action.payload.trim();
    },
    changeState: (state: StoreState, action: PayloadAction<string>) => {
      action.payload === 'null'
        ? (state.params.state = '')
        : (state.params.state = action.payload);
    },
    changeDisplaycount: (state: StoreState, action: PayloadAction<string>) => {
      action.payload === 'null'
        ? (state.params.displaycount = '')
        : (state.params.displaycount = action.payload);
    },
    changeSort: (state: StoreState, action: PayloadAction<SortParams>) => {
      state.params.sort = action.payload.sort;
      state.params.order = action.payload.order;
    },
    changePage: (state: StoreState, action: PayloadAction<PageParams>) => {
      state.params.offset = action.payload.offset;
      state.params.limit = action.payload.limit;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncQuery.pending, (state: StoreState) => {
        state.loading = true;
      })
      .addCase(
        asyncQuery.fulfilled,
        (state: StoreState, action: PayloadAction<Data>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(asyncQuery.rejected, (state: StoreState) => {
        state.loading = false;
      });
  },
});

export const asyncQuery = createAsyncThunk(
  'domainRules/query',
  async (_, action) => {
    const params: Params = (action.getState() as RootState).domainRules.params;
    const resp = await axios.get('/wdapi/domain_rules', { params });
    return resp.data;
  }
);

export const {
  changeDomain,
  changeState,
  changeDisplaycount,
  changeSort,
  changePage,
} = slice.actions;

const DomainRulesSlice = slice.reducer;

export default DomainRulesSlice;
