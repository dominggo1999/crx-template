import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { sendMessage } from 'webext-bridge';

export const Global = createGlobalStyle`
  #root{
    ${tw`
      w-full 
      h-full
    `}
  }
`;

export const Box = styled.div`
  ${tw`
    bg-purple-400 
    w-full 
    h-full 
    flex 
    items-center 
    justify-center
  `}

  div{
    ${tw`
      text-center
      flex 
      flex-col 
      gap-y-2
    `}
  }

  p{
    ${tw`
      text-2xl
    `}
  }

  button{
    ${tw`
      bg-black 
      text-white 
      text-xl
      px-3  
      py-1 
      rounded-full
    `}
  }
`;

const Popup = () => {
  const [count, setCount] = useState(0);
  const [bgResponse, setBgResponse] = useState('');

  const handleCount = () => {
    setCount(count + 1);
  };

  const pingBackground = async () => {
    const res = await sendMessage('ping', { hi: true }, 'background');

    setBgResponse(res);
  };

  return (
    <>
      <Global />
      <Box>
        <div>
          <p>{count}</p>
          <button onClick={handleCount}>Count</button>
          <p>{bgResponse}</p>
          <button onClick={pingBackground}>Ping bg</button>
        </div>
      </Box>
    </>
  );
};

export default Popup;
