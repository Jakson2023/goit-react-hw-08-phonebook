import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: black;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;

  &.active {
    color: #ff9800;
  }
`;
