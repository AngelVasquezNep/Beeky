import { COLORS } from 'theme';

import BaseIcon from './BaseIcon';

function AudioBookmarkIcon({ color = COLORS.primary, ...rest }) {
  return (
    <BaseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21 11h-1.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H21c1.103 0 2 .897 2 2s-.897 2-2 2zm-1-1h1a1 1 0 000-2h-1zm-5.5 1H13c-1.103 0-2-.897-2-2s.897-2 2-2h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM13 8a1 1 0 000 2h1V8z"
        fill={color}
        data-original="#000000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21.5 8a.5.5 0 01-.5-.5V5c0-2.206-1.794-4-4-4s-4 1.794-4 4v2.5a.5.5 0 01-1 0V5c0-2.757 2.243-5 5-5s5 2.243 5 5v2.5a.5.5 0 01-.5.5zm-20 10a.5.5 0 01-.5-.5v-15C1 1.121 2.121 0 3.5 0h7a.5.5 0 010 1h-7C2.673 1 2 1.673 2 2.5v15a.5.5 0 01-.5.5z"
        fill={color}
        data-original="#000000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M7.5 20h-4C2.121 20 1 18.879 1 17.5S2.121 15 3.5 15H18v-1.5a.5.5 0 011 0v2a.5.5 0 01-.5.5h-15c-.827 0-1.5.673-1.5 1.5S2.673 19 3.5 19h4a.5.5 0 010 1z"
        fill={color}
        data-original="#000000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M18.5 20h-6a.5.5 0 010-1H18v-3.5a.5.5 0 011 0v4a.5.5 0 01-.5.5z"
        fill={color}
        data-original="#000000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.5 24a.505.505 0 01-.313-.109L10 22.141l-2.188 1.75A.502.502 0 017 23.5v-6a.5.5 0 011 0v4.96l1.688-1.351a.5.5 0 01.625 0L12 22.46V17.5a.5.5 0 011 0v6a.499.499 0 01-.5.5z"
        fill={color}
        data-original="#000000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.5 18h-9a.5.5 0 010-1h9a.5.5 0 010 1z"
        fill={color}
        data-original="#000000"
      />
    </BaseIcon>
  );
}

export default AudioBookmarkIcon;
