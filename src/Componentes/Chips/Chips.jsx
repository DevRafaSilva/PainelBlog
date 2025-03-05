import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material';
const Chips = ({ text }) => {
  const ChipStyled = styled(Chip)(({ theme }) => ({
    backgroundColor: '#c8e6c9',
    '&:hover': {
      backgroundColor: '#a5d6a7',
      outline: '2px solid #81c784',
      cursor: 'pointer',
      color: '#e8f5e9',
    },
  }));

  return (
    <>
      <ChipStyled sx={{ mr: 3, mb: 6 }} label={text} />
    </>
  );
};

export default Chips;
