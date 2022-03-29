import { useCallback, useState } from "react";

const customHooks = (initialvalue = null) => {
  const [value, setValue] = useState(initialvalue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default customHooks;
