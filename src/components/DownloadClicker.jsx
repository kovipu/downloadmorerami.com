import React, { useState } from 'react';
import styled from 'styled-components';

export default function DownloadClicker() {
  const [runners, setRunners] = useState([]);
  const [num, setNum] = useState(0);

  function handleClick() {
    // TODO: clear these, this will crash the browser at some point...
    setRunners([...runners, true]);
    const heloust = new Audio('heloust.ogg');
    heloust.play();
    setNum(num + 1);
  }

  return (
    <Wrapper>
      <RunnerWrapper>
        <Rami src="rami_jamit2_transparent.gif" />
        <Rami src="rami_jamit_transparent.gif" left={20}/>
        {runners.map(() => (
          <Runner src="rami_jamit_transparent.gif"/>
        ))}
        <Computer src="ramin_kone.png" />
      </RunnerWrapper>
      <ControlWrapper>
        <Button onClick={handleClick}>
          download
        </Button>
        {num} Ramia
      </ControlWrapper>
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
  height: 100px;
  position: relative;
`;

const Rami = styled.img`
  position: absolute;
  height: 64px;
  margin-top: 10px;
  float: left;
  margin-left: ${props => props.left}px;
`;

const Runner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  margin-top: 10px;
  -webkit-animation: slide 1s backwards;
  animation: slide 1s backwards;

  @-webkit-keyframes slide {
    100% { left: 330px; }
  }

  @keyframes slide {
    100% { left: 330px; }
  }
`;

const Computer = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  float: right;
  z-index: 1000;
`;

const ControlWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  padding-right: 1em;
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
  margin-top: 1em;
  margin-right: 4em;
`;
