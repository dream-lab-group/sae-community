import { MobileMenu } from './header/mobile-menu';
import { AppBarHeaderProps } from './header/types';
import { MobileNavbar } from './navigation-elements/mobile-navbar';

export const AppBarHeader = ({
  mobileMenuOpen,
  handleOpenMobileMenu,
  handleCloseMobileMenu,
}: AppBarHeaderProps): JSX.Element => {
  return (
    <>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
    </>
  );
};
