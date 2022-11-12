import logoImg from '@/assets/logo.svg';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="DT Money logo" />

        <NewTransactionButton type="button">
          Nova transação
        </NewTransactionButton>

      </HeaderContent>
    </HeaderContainer>
  );
}
