import _ from 'lodash';
import { useCallback, useState } from 'react';

export const useComponentRegistry = () => {
  const [components, setComponents] = useState({});

  function registerComponent(name, Component) {
    setComponents((prevComponents) => ({ ...prevComponents, [name]: Component }));
  }

  const ItemWrapper = useCallback(
    (props) => {
      const getComponent = (name) => components[name];
      const Component = getComponent(props.use);
      return Component ? <Component {..._.omit(props, 'use')} /> : null;
    },
    [components]
  );

  return { registerComponent, ItemWrapper };
};
