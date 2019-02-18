import * as React from 'react';
import Link from 'next/link';

const Header: React.SFC<{}> = () => {
  return (
    <div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/signup"><a>Signup</a></Link></li>
        <li><Link href="/login"><a>Login</a></Link></li>
      </ul>
    </div>
  )
}

export default Header;
