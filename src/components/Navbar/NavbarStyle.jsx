import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  /* THE FORCE FIX */
  position: -webkit-sticky; /* For Safari */
  position: sticky; 
  top: 0; 
  z-index: 9999; /* Higher priority */
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.primary + '33'};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const Img = styled.img`
  padding: 0 6px;
  display: flex;
  height: 40px;
  justify-content: start;
  align-items: center;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 1rem; /* Fixed the 1024px overflow here */
  list-style: none;

  @media screen and (max-width: 1024px) {
    gap: 12px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  
  /* THE ONE-LINE SECRET */
  white-space: nowrap; /* Forces text to stay on one line */
  flex-shrink: 0;      /* Stops the button from squishing */
  display: inline-block;
  
  transition: all 0.4s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;
export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;


