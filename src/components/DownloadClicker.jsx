import React from 'react';
import styled from 'styled-components';

export default function DownloadClicker() {
  return (
    <Wrapper>
      <RunnerWrapper>
        <Rami src="rami_jamit2_transparent.gif" left={0} />
        <Rami src="rami_jamit_transparent.gif" left={-40} />
      </RunnerWrapper>
      <Button>download</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RunnerWrapper = styled.div`
  width: 100%;
`;

const Rami = styled.img`
  position: relative;
  height: 64px;
  left: ${props => props.left}px;
`;

const Button = styled.button`
  padding: 20px 30px;
  background-color: #35B4F1;
  border-radius: 300px;
  border-color: #35B4F1;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
