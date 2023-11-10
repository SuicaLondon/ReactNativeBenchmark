import {differenceInMilliseconds} from 'date-fns';
import {useMemo} from 'react';

export function useTimeDifference() {
  const startTime = useMemo(() => new Date(), []);
  return {
    end() {
      const endTime = new Date();
      return differenceInMilliseconds(endTime, startTime);
    },
  };
}
