import useSWR, { type Fetcher } from 'swr';
import { API_DATA_ENDPOINT } from './constants';
import { Data } from './types';

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then(res => res.json())

export function useData() {
  const { data, error } = useSWR<Data>(API_DATA_ENDPOINT, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
