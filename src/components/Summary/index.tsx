import { TransactionsContext } from '@/contexts/TransactionsContext';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';

import { SummaryCard, SummaryContainer } from './styles';

export default function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
