import {Link} from 'react-router-dom';
import React from 'react';
import { Element } from './menu-item.styles';
import Button from '../button/button.component';

type Props = {
  url: string
  title: string
}

const MenuItem = ({ url, title }: Props) => (
  <Element>
    <Link to={url}>
      <Button label={title} />
    </Link>
  </Element>
)

export default MenuItem;
