import React, { createContext, useContext, ReactNode, RefObject } from 'react';

type ToastConfig = {
    type?: string;
    text1?: string;
    text2?: string;
    position?: 'top' | 'bottom';
    visibilityTime?: number;
};

type ToastContextData = {
    showToast: (config: ToastConfig) => void;
};

type ToastProviderProps = {
    children: ReactNode;
    toastRef: RefObject<any>;
};


const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const ToastProvider = ({ children, toastRef }: ToastProviderProps) => {
    const showToast = (config: ToastConfig) => {
        if (toastRef.current) {
            toastRef.current.show(config);
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
