import { OldLiquidity, Action, ActionTypes } from '../actions';

export const balancerHistoricalReducer = (state: OldLiquidity[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchOldLiquidity:
			return action.payload;
		default:
			return state;
	}
};
