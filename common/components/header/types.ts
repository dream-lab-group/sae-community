import React from 'react';
import { boolean } from 'yup';

export type AppBarHeaderProps = {
  mobileMenuOpen: boolean;
  handleOpenMobileMenu?: () => void;
  handleCloseMobileMenu?: () => void;
};

export type CustomMobileNavButtonProps = {
  key: string;
  value: string;
  navElement: string;
};
