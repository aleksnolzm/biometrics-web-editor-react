import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useRequest } from './useRequest/useRequest';

const emptySelection = {
  label: 'Todo',
  value: '',
};

const initialOptions = {
  emptyOption: false,
  autoFetch: true,
  label: 'name',
  value: 'key',
};

export const useExtractSelector = (requestFunction = () => new Promise(), entryOptions = {}) => {
  const options = _.merge({}, initialOptions, entryOptions);
  const [dataSelect, setDataSelect] = useState([]);
  const [dataIndex, setDataIndex] = useState([]);
  const { response, makeRequest } = useRequest(requestFunction);

  useEffect(() => {
    if (!options.autoFetch) return;
    makeRequest();
  }, []);

  useEffect(() => {
    if (response === undefined) return;
    setDataIndex(response);
    const adjLocations = response.map((item) => {
      return {
        label: item[options.label],
        value: item[options.value],
      };
    });
    if (!options.emptyOption) {
      setDataSelect(adjLocations);
    } else {
      setDataSelect([emptySelection, ...adjLocations]);
    }
  }, [response]);

  return { dataSelect, dataIndex, makeRequest };
};
