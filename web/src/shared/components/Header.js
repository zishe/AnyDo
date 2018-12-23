import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled, { css } from 'styled-components';
import { Typography, AppBar, Toolbar, IconButton, Button, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const MenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

const HeadTitle = styled(Typography)`
  && {
    flex: 1;
  }
`;
const Wrapper = styled.div`
  && {
    flex-grow: 1;
  }
`;

const StyledBar = styled(AppBar)`
  && {
    flex-grow: 1;
    color: #fff;
    background-color: #2196f3;
  }
`;

const SearchBar = styled.div`
  && {
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    margin-left: 8px;
    margin-right: 46px;
    border-radius: 2px;
  }
`;
const SearchIconArea = styled.div`
  && {
    width: 72px;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  }
`;
const AutocompleteArea = styled.span`
  && {
    position: relative;
    display: inline-block;
    direction: ltr;
  }
`;
const AutocompleteInput = styled.input`
  && {
    position: relative;
    /* vertical-align: top; */
    width: 200px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font: inherit;
    color: inherit;
    border: 0;
    margin: 0;
    padding: 8px 8px 8px 72px;
    display: block;
    background: none;
    white-space: normal;

    &:focus {
      outline: none !important;
      color: #fff;
      transform: scale(2) 300ms;
    }

    ${props =>
      props.focused &&
      css`
        margin-top: 30px;
      `};
  }
`;

@inject('store')
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.search = React.createRef();
  }

  onFocus = () => {};

  render() {
    return (
      <Wrapper>
        <StyledBar position="static">
          <Toolbar>
            <MenuButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </MenuButton>
            <HeadTitle variant="title" color="inherit" />
            <SearchBar>
              <SearchIconArea>
                <SearchIcon />
              </SearchIconArea>
              <AutocompleteArea>
                <AutocompleteInput onFocus={this.onFocus} />
              </AutocompleteArea>
            </SearchBar>
            <Badge
              style={{ marginRight: 10 }}
              // badgeContent={this.props.store.shoppingCartStore.size}
              color="primary"
            >
              <ShoppingCart />
            </Badge>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </StyledBar>
      </Wrapper>
    );
  }
}

export default Header;
