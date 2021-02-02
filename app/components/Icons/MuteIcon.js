import { COLORS } from 'theme';

import BaseIcon from './BaseIcon';

function MuteIcon({ color = COLORS.primary, ...rest }) {
  return (
    <BaseIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 573.336 573"
      {...rest}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M533.598 160.805a12.444 12.444 0 00-8.809-3.653 12.437 12.437 0 00-8.809 3.653l-69.09 69.09-69.09-69.09c-4.859-4.864-12.745-4.864-17.612 0-4.868 4.863-4.868 12.75 0 17.617l69.09 69.09-69.09 69.09a12.413 12.413 0 00-3.657 8.8c0 3.313 1.313 6.477 3.657 8.813a12.276 12.276 0 008.867 3.625 12.79 12.79 0 008.87-3.625l69.09-69.09 69.09 69.09a12.282 12.282 0 008.868 3.625 12.814 12.814 0 008.875-3.625 12.46 12.46 0 003.656-8.813c0-3.3-1.32-6.468-3.656-8.8l-69.465-68.97 69.09-69.085a12.48 12.48 0 003.761-8.848 12.48 12.48 0 00-3.636-8.894zM306.965.766a17.516 17.516 0 00-18.117 1.25L109.445 128.199H62.47C27.973 128.207.016 156.172 0 190.664V304.73c.016 34.497 27.973 62.454 62.469 62.47h46.976l179.403 126.183a17.425 17.425 0 0018.09 1.265 17.41 17.41 0 009.394-15.511V16.383A17.218 17.218 0 00306.965.766zM291.473 464.52L124.559 347.21a12.47 12.47 0 00-10.118-5.124H62.47c-20.676-.059-37.422-16.809-37.48-37.48V190.538c.058-20.672 16.804-37.418 37.48-37.48h51.972a12.65 12.65 0 0010.118-5.122L291.473 30.621zm0 0"
        data-original="#000000"
        fill={color}
      />
    </BaseIcon>
  );
}

export default MuteIcon;
