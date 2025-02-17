import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Manager } from 'socket.io-client';

const socketStatus = {
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  ERROR: 'error',
};

const initialOptions = {
  autoReconnect: false, // Whether to automatically connect upon creation. If set to , you need to manually connect:false
  reconnection: true, // Whether reconnection is enabled or not. If set to false, you need to manually reconnect
  name: 'Socket Service -> Main',
  transports: ['websocket'],
};

export const useSocket = (socketBasePath, namespace, entryOptions) => {
  const options = _.merge({}, initialOptions, entryOptions);
  const socketRef = useRef(null);
  const [socketState, setSocketState] = useState(socketStatus.DISCONNECTED);

  useEffect(() => {
    if (!socketRef.current) {
      const manager = new Manager(socketBasePath);
      socketRef.current = manager.socket(namespace, {
        autoConnect: options.autoReconnect,
        reconnection: options.reconnection,
        transports: options.transports,
        ...options,
      });

      socketRef.current.on('connect', () => {
        console.log(`${options?.name} %csocket ${namespace} ID: ${socketRef?.current.id}`, 'background-color: rgb(112 26 117); color: white;');
        if (socketRef.current.connected && socketRef?.current.id !== undefined) {
          setSocketState(socketStatus.CONNECTED);
        }
      });
      socketRef.current.on('connect_error', (message) => {
        setSocketState(socketStatus.ERROR);
        console.log(`connect_error: ${options?.name} ${socketRef?.current.id}`);
        setTimeout(() => {
          if (options.autoReconnect) {
            // socketRef.current.connect();
          }
        }, 1300);
      });

      socketRef.current.on('disconnect', () => {
        setSocketState(socketStatus.DISCONNECTED);
        console.log(`disconnect: ${options.name} ${socketRef?.current.id}`);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
        setSocketState(socketStatus.DISCONNECTED);
      }
    };
  }, [socketBasePath, namespace, options.autoReconnect, options.name]);

  const listenEvent = useCallback((channel, callback) => {
    socketRef.current.on(channel, (response) => {
      callback(response);
    });
  }, []);

  const emitEvent = useCallback((channel, message, callback) => {
    socketRef.current.emit(channel, message, callback);
  }, []);

  const closeEvent = useCallback((channel) => {
    socketRef.current.off(channel);
  }, []);

  const tryConnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.connect();
    }
  }, []);

  const tryDisconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
  }, []);

  const setToken = useCallback((token) => {
    if (token !== undefined) {
      socketRef.current.disconnect();
      socketRef.current.auth = { token };
      setTimeout(() => {
        socketRef?.current?.connect();
      }, 1000);
    }
  }, []);

  const updateQuery = (query) => {
    console.log('setQuery', query);
    return new Promise((res) => {
      if (query !== undefined && typeof query === 'object') {
        socketRef.current.disconnect();
        socketRef.current.io.opts.query = query;
        setTimeout(() => {
          socketRef?.current?.connect();
          const isEqual = _.isEqual(socketRef.current?.io?.opts?.query, query);
          if (isEqual) {
            res(true);
          } else {
            res(false);
          }
        }, 300);
      }
    });
  };

  const updateUrl = (newUrl) => {
    console.log('setQuery', newUrl);
    return new Promise((res) => {
      if (newUrl !== undefined && newUrl !== '') {
        socketRef.current.disconnect();
        socketRef.current.io.uri = newUrl;
        setTimeout(() => {
          socketRef?.current?.connect();
          if (socketRef.current?.io?.uri === newUrl) {
            res(true);
          } else {
            res(false);
          }
        }, 300);
      }
    });
  };

  return {
    socketRef,
    listenEvent,
    emitEvent,
    socketState,
    closeEvent,
    socketStatus,
    tryConnect,
    tryDisconnect,
    setToken,
    updateQuery,
    updateUrl,
  };
};
