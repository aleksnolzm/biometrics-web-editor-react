import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useSocket } from './useSocket';

const initialProps = {
  url: undefined,
  space: '',
  event: 'list',
  name: 'Socket Terminal',
};

export const useTerminalState = (receivedProps = {}) => {
  const props = _.merge({}, initialProps, receivedProps);
  const {
    emitEvent: notifyTerminalEmit,
    listenEvent: notifyTerminalOn,
    socketState,
    updateUrl: notifyUpdateUrl,
    tryConnect: tryNotifyConnect,
    tryDisconnect: tryNotifyDisconnect,
  } = useSocket(props.url, props.space, {
    name: props.name,
    autoReconnect: false,
  });

  // ------- States de Notify Manager Terminal -------
  const [onlineTerminals, setOnlineTerminals] = useState([]);

  // -------- Handlers sockets ------
  const turnOnSocket = () => {
    tryNotifyConnect();
  };

  const turnOffSocket = () => {
    tryNotifyDisconnect();
    setOnlineTerminals([]);
  };

  // ------ Actualizacion de referencia de url de conexion para socket Notify acorde archivo de configuracion envpaths.
  const startSocket = async (newUrl) => {
    notifyUpdateUrl(newUrl).then((resUri) => {
      console.log('URI WAS CHANGED? ', resUri);
      notifyTerminalEmit(props.event, {});
    });
  };

  // -------- Props update -------------------
  const setProps = () => {

  };

  // -------- Si setup autoriza uso de app se inicializa socket
  useEffect(() => {
    tryNotifyDisconnect();
    return () => {
      tryNotifyDisconnect();
      setOnlineTerminals([]);
    };
  }, []);

  // -------- Inicializando Listeners ON ---
  useEffect(() => {
    notifyTerminalOn(props.event, (resTerminalList) => {
      console.log(resTerminalList);
      if (resTerminalList !== undefined && resTerminalList.success) {
        setOnlineTerminals(resTerminalList.data);
      }
    });
  }, []);

  return {
    turnOnSocket,
    turnOffSocket,
    socketState,
    startSocket,
    onlineTerminals,
  };
};
