import { createContext, ReactElement, ReactNode, useContext } from "react";

type ConditionalValueType = string | number | boolean | undefined;

const ConditionalContext = createContext<ConditionalValueType[]>([]);

interface ConditionalProps {
  conditions: ConditionalValueType[];
  children:
    | ReactElement<typeof ConditionalValue>
    | ReactElement<typeof ConditionalValue>[];
}

const Conditional = ({ conditions, children }: ConditionalProps) => {
  return (
    <ConditionalContext.Provider value={conditions}>
      {children}
    </ConditionalContext.Provider>
  );
};

interface ConditionalValueProps {
  value: ConditionalValueType;
  children: ReactNode;
}

const ConditionalValue = ({ value, children }: ConditionalValueProps) => {
  const conditions = useContext(ConditionalContext);

  const render = conditions.includes(value);

  return <>{render && children}</>;
};

Conditional.Value = ConditionalValue;

export default Conditional;
