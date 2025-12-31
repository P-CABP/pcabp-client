import { createContext, ReactNode, useContext } from "react";

const ConditionContext = createContext<boolean>(false);

interface ConditionProps {
  condition: boolean;
  children: ReactNode;
}

const Condition = ({ condition, children }: ConditionProps) => {
  return (
    <ConditionContext.Provider value={condition}>
      {children}
    </ConditionContext.Provider>
  );
};

const True = ({ children }: { children: ReactNode }) => {
  const condition = useContext(ConditionContext);
  return <>{condition && children}</>;
};

const False = ({ children }: { children: ReactNode }) => {
  const condition = useContext(ConditionContext);
  return <>{!condition && children}</>;
};

Condition.True = True;
Condition.False = False;

export default Condition;
