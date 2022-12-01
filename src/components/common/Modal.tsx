import { useRouter } from 'next/router';
import React, { SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

interface IModalProps {
  header?: string;
  content: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ content, isModalOpen, setIsModalOpen }: IModalProps) {
  const router = useRouter();

  const backPrevPage = () => {
    router.replace('login');
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      {isModalOpen ? (
        <section>
          {/* <header>
            {header}
            <button className="close" onClick={handleClose}>
              &times;
            </button>
          </header> */}
          <div className="contentBox">{content}</div>
          <button className="btn answerNo" onClick={backPrevPage}>
            네
          </button>
          <button className="btn answerYes" onClick={handleClose}>
            아니오
          </button>
        </section>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  align-items: center;
  animation: modal-bg-show 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 14px;

  section {
    width: 77%;
    max-width: 350px;
    margin: 12rem auto;
    padding: 10px;
    border-radius: 15px;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
  }

  .contentBox {
    padding: 16px;
    margin: 1rem 8px;
    line-height: 24px;
  }

  .buttonBox {
    margin: 0;
  }
  .btn {
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 13px;
    margin: 5px 10px;
    width: 65px;
  }

  .answerNo {
    color: #000;
    background-color: #bfbfbf;
  }
  .answerYes {
    color: #fff;
    background-color: #715ae4;
  }
`;
