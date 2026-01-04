import { createContext, ReactNode, useContext } from "react";

import { useTranslation } from "react-i18next";

import DevelopError from "@/errors/develop-error";
import { Optional } from "@/types/common";

type ConditionalValueType = string | number | boolean | undefined;

interface ConditionalProps {
  condition?: ConditionalValueType;
  active?: boolean;
  children: ReactNode;
}

const Conditional = ({ condition, active, children }: ConditionalProps) => {
  const { t } = useTranslation();

  const conditions = useContext(ConditionalContext);

  if (conditions === undefined && active === undefined) {
    throw new DevelopError(
      t("develop.message.INVALID_CONDITIONAL_COMPONENT_CONFIGURATION"),
    );
  }

  const render = conditions?.includes(condition) ?? active === true;

  return <>{render && children}</>;
};

const ConditionalContext =
  createContext<Optional<ConditionalValueType[]>>(undefined);

interface ConditionalProviderProps {
  conditions?: ConditionalValueType[];
  children: ReactNode;
}

const ConditionalProvider = ({
  conditions,
  children,
}: ConditionalProviderProps) => {
  const conditionalValue = conditions;

  return (
    <ConditionalContext.Provider value={conditionalValue ?? []}>
      {children}
    </ConditionalContext.Provider>
  );
};

Conditional.Provider = ConditionalProvider;

export default Conditional;
