import React from 'react';

import { Button as NativeBaseButton, IButtonProps } from 'native-base';

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <NativeBaseButton colorScheme="primary" borderRadius="md" {...rest}>
      {children}
    </NativeBaseButton>
  );
};

export default Button;
