import {Action} from '@reduxjs/toolkit';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import ApplicationState from './application-state';

export type GlobalAppThunk<TStore> = ThunkAction<void, TStore, null, Action<string>>;

export type AppThunk = GlobalAppThunk<ApplicationState>

export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;