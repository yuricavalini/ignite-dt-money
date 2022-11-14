import { useContext } from 'react';
import { TransactionsContext } from '@/contexts/TransactionsContext';

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.price;
        accumulator.total += transaction.price;
      } else {
        accumulator.outcome += transaction.price;
        accumulator.total -= transaction.price;
      }
      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  return summary;
}
