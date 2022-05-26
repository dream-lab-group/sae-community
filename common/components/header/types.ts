import React from 'react';
import { boolean } from 'yup';

export type AppBarHeaderProps = {
  menuOpen: boolean;
  handleOpenMenu?: () => void;
  handleCloseMenu?: () => void;
};

export type CustomNavButtonProps = {
  key: string;
  value: string;
  navElement: string;
};
