import logoImg from '@/assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';

import NewTransactionModal from '../NewTransactionModal';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="DT Money logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
