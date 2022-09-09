import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import DomainRulesSlice from '../pages/DomainRules/slice';

export const store = configureStore({
  reducer: {
    domainRules: DomainRulesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
