import React from "react";

interface AuxProps {
  children: React.ReactNode;
}

export const Aux: React.FC<AuxProps> = ({ children }) => <>{children}</>;
