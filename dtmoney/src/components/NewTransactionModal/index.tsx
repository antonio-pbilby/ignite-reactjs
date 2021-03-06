import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransaction';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

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
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input 
        placeholder="Título"
        value={title}
        onChange={event => setTitle(event.target.value)}/>

      <input 
        placeholder="Preço"
        type="number"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}/>

      <TransactionTypeContainer >

        <RadioBox 
          type="button" 
          onClick={() => {setType('deposit')}}
          isActive={type=== 'deposit'}
          activeColor="green"
          >
          <img src={incomeImg} alt="" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox 
          type="button" 
          onClick={() => {setType('withdraw')}}
          isActive={type=== 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="" />
          <span>Saída</span>
        </RadioBox>

      </TransactionTypeContainer>
      <input 
        placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}/>
      <button type="submit">Cadastrar</button>

    </Container>
  </Modal>)
}