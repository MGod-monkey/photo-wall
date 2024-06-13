declare module 'react-modal-image' {
    import React from 'react';
  
    interface LightboxProps {
      small: string;
      large: string;
      alt: string;
      onClose: () => void;
    }
  
    const Lightbox: React.ComponentType<LightboxProps>;
    export default Lightbox;
  }
  