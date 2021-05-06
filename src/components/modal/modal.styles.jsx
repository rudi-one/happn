import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.15)
`

export const ModalContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 30%;
  left: 30%;
  right: 30%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Close = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 12px;
  right: 20px;
  cursor: pointer;
`
