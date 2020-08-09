import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface OldLiquidity {
	id: string;
	liquidity: string;
	totalSwapVolume: string;
	swaps: {
		poolTotalSwapVolume: string;
	};
}

export interface FetchOldLiquidityAction {
	type: ActionTypes.fetchOldLiquidity;
	payload: OldLiquidity[];
}

export const fetchOldLiquidity = (num: number) => async (dispatch: Dispatch) => {
	const response = await axios({
		url: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer',
		method: 'post',
		data: {
			query: `{
      pools (first: 1000, skip: ${num * 1000}, where: {publicSwap: true},orderBy: liquidity, orderDirection: desc) {
        id
        liquidity
				totalSwapVolume
     }
     swaps (first: 1,orderBy: timestamp,orderDirection: desc, where: {timestamp_lt: ${Math.floor(Date.now() / 1000) -
			86400}}) {
         poolTotalSwapVolume
       }
   }`
		}
	});
	dispatch({ type: ActionTypes.fetchOldLiquidity, payload: response.data });
};
