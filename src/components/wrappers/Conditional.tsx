import { createContext, ReactElement, ReactNode, useContext } from "react";

import { Optional } from "@/types/common";

type ConditionalValueType = string | number | boolean | undefined;

const ConditionalContext =
  createContext<Optional<ConditionalValueType>>(undefined);

interface ConditionalProps {
  condition: ConditionalValueType;
  children:
    | ReactElement<typeof ConditionalValue>
    | ReactElement<typeof ConditionalValue>[];
}

const Conditional = ({ condition, children }: ConditionalProps) => {
  return (
    <ConditionalContext.Provider value={condition}>
      {children}
    </ConditionalContext.Provider>
  );
};

interface ConditionalValueProps {
  value?: ConditionalValueType;
  children: ReactNode;
}

const ConditionalValue = ({ value, children }: ConditionalValueProps) => {
  const condition = useContext(ConditionalContext);
  return <>{condition === value && children}</>;
};

Conditional.Value = ConditionalValue;

export default Conditional;
