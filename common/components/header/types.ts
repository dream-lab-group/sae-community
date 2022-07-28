import React from 'react';

export type AppBarHeaderProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser?: string,
  handleOpenMenu?: () => void;
  handleCloseMenu?: () => void;
  key?: string;
  value?: string;
  navElement?: string;
};
