import { combineReducers } from 'redux';
import { balancerHistoricalReducer } from './balancerHistoricalReducer';
import { OldLiquidity } from '../actions';

export interface StoreState {
	historicalPools: OldLiquidity[];
}

export const reducers = combineReducers<StoreState>({
	historicalPools: balancerHistoricalReducer
});
