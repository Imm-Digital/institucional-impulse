'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export interface IResizeScreenContext {
    data?: any;
    isMobile?: boolean;
}



export const ResizeScreenContext = createContext<IResizeScreenContext>({} as IResizeScreenContext)

export const ResizeScreenContextProvider = ({ children }:any) => {
    const [data, setData] = useState<any>();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth <= 990);
        };
    
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
    
        return () => (window.removeEventListener('resize', checkIfMobile))
      }, []); 

    const value = {
        data,
        isMobile,
    }

  return <ResizeScreenContext.Provider value={value}>{children}</ResizeScreenContext.Provider>
}

export function useResizeScreen(): IResizeScreenContext {
    return useContext(ResizeScreenContext)
}