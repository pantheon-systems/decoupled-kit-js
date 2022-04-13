import React from "react";
export { ClasserProvider, useClasser, Classes };
declare type AppClassName = string;
declare type LibClassName = string;
declare type Classes = Record<LibClassName, AppClassName>;
interface ClasserProviderProps {
    classes: Classes | undefined;
    children?: React.ReactNode;
}
declare function ClasserProvider({ classes, children, }: ClasserProviderProps): JSX.Element;
declare function useClasser(libClassPrefix: string, innerClasses?: Classes): (...libClassSuffixList: string[]) => string;
