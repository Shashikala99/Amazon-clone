declare module 'react-currency-format' {
    import * as React from 'react';
  
    interface NumberFormatProps {
      value: number | string;
      displayType?: 'text' | 'input';
      thousandSeparator?: boolean | string;
      prefix?: string;
      suffix?: string;
      renderText?: (formattedValue: string) => React.ReactNode;
      decimalScale?: number;
    }
  
    const NumberFormat: React.FC<NumberFormatProps>;
  
    export default NumberFormat;
  }
  