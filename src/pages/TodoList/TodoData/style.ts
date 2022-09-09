import styled from "styled-components";

export const ContentContainer = styled.div``;
export const ContentBlock = styled.div`
  background: #ffbb91;
  width: 390px;
  min-height: ;
  margin: auto;
  padding: 1.5rem 1.2rem;
  min-height: 50.5vh;
`;
export const TextItem = styled.div`
  display: flex;
  align-items: center;
  color: #515070;
  padding: 0.7rem 0rem;
  margin: 1rem;
  &:not(:last-of-type) {
    border-bottom: 2px solid #fff;
  }
`;

export const CheckInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #515070;
`;
export const TextItemBlock = styled.label`
  margin: 0px 0px 0px 0.75rem;
  display: flex;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
export const TextTime = styled.div`
  padding-top: 0.25rem;
  font-size: 12px;
`;

export const TextBlock = styled.div`
  margin: 0 0 0 0.75rem;
`;

export const NoScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  div {
    color: #515070;
    font-size: 1.25rem;
    opacity: 0.7;
  }
`;
