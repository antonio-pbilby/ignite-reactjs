import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
  <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    className="react-modal-content"
    overlayClassName="react-modal-overlay"
  >
    <button type="button" onClick={onRequestClose} className="react-modal-close">
      <img src={closeImg} alt="Fechar"/>
    </button>
    <Container>
      <h2>Cadastrar transação</h2>

      <input placeholder="Título"/>
      <input type="number" placeholder="Preço"/>
      <TransactionTypeContainer >

        <button>
          <img src={incomeImg} alt="" />
          <span>Entrada</span>
        </button>

        <button>
          <img src={outcomeImg} alt="" />
          <span>Saída</span>
        </button>

      </TransactionTypeContainer>
      <input placeholder="Categoria"/>
      <button type="submit">Cadastrar</button>

    </Container>
  </Modal>)
}