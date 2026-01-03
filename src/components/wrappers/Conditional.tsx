import { createContext, ReactNode, useContext } from "react";

import { Optional } from "@/types/common";

type ConditionalValueType = string | number | boolean | undefined;

const ConditionalContext =
  createContext<Optional<ConditionalValueType[]>>(undefined);

interface ConditionalProps {
  conditions?: ConditionalValueType[];
  children: ReactNode;
}

const Conditional = ({ conditions, children }: ConditionalProps) => {
  const conditionalValue = conditions ?? [true];

  return (
    <ConditionalContext.Provider value={conditionalValue}>
      {children}
    </ConditionalContext.Provider>
  );
};

interface ConditionalActivityProps {
  active: ConditionalValueType;
  children: ReactNode;
}

const ConditionalActivity = ({
  active,
  children,
}: ConditionalActivityProps) => {
  const conditions = useContext(ConditionalContext);

  const render = conditions?.includes(active) ?? active === true;

  return <>{render && children}</>;
};

Conditional.Activity = ConditionalActivity;

export default Conditional;
