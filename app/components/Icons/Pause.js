import { COLORS } from "theme"

import BaseIcon from './BaseIcon'

function PauseIcon({ color = COLORS.primary, ...rest }) {
  return (
    <BaseIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.448 511.448"
      {...rest}
    >
      <g fill={color}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zM255.724 469.39c-117.816 0-213.667-95.851-213.667-213.667S137.908 42.057 255.724 42.057 469.39 137.908 469.39 255.724 373.54 469.39 255.724 469.39z"
          data-original="#000000"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M298.39 160.057c-11.598 0-21 9.402-21 21V330.39c0 11.598 9.402 21 21 21s21-9.402 21-21V181.057c0-11.598-9.401-21-21-21zm-85.333 0c-11.598 0-21 9.402-21 21V330.39c0 11.598 9.402 21 21 21s21-9.402 21-21V181.057c0-11.598-9.401-21-21-21z"
          data-original="#000000"
        />
      </g>
    </BaseIcon>
  );
}

export default PauseIcon;
