import { FC, ReactNode, ReactPortal, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "./helpers/functions";

type ReactPortalPropsTypes = {
  children: ReactNode;
  wrapperId?: string;
};

export const CustomPortal: FC<ReactPortalPropsTypes> = ({
  children,
  wrapperId = "portal",
}): ReactPortal => {
  const [wrapperElement, setWrapperElement] = useState<Element>();
  let wrapper = document.getElementById(wrapperId);

  useEffect(() => {
    let systemCreated = false;

    if (!wrapper) {
      wrapper = createWrapperAndAppendToBody(wrapperId);
      systemCreated = true;
    }
    setWrapperElement(wrapper);

    return () => {
      if (systemCreated && wrapper?.parentNode) {
        wrapper.parentNode.removeChild(wrapper);
      }
    };
  }, []);

  return createPortal(children, wrapperElement as Element??wrapper);
};
