import _debounce from 'lodash.debounce';
import { DependencyList, useCallback } from 'react';

export default function useDebounce(
  fn: any,
  delay: number,
  deps: DependencyList
) {
  return useCallback(_debounce(fn, delay), deps);
}
