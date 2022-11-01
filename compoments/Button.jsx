import * as React from 'react';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

const SuccessButton = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    borderRadius: "25px",
    color: "white",
    '&:hover': {
      backgroundColor: 'blue',
    },
}));

export default function StyledCustomization({ children }) {
  return <SuccessButton >{children}</SuccessButton>;
}