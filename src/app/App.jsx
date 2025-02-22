import {useEffect, useLayoutEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import withBrowserRouter from "app/wrappers/withBowserRouter";
import { updateBaseUrl } from "app/services/request";
import _ from "lodash";
import Editor from "app/views/Editor";
import SessionStorageManager from "app/services/sessionStorage";

const EVENT_IDENTIFIER = 5849301;

function App() {
  const [configs, setConfigs] = useState(undefined);
  /**
   * Para inicializar con una prueba rapida, al inicializar vite
   * el storage debe contener las propiedades siguientes recomendadas
   * {
   *   identifier: required;
   *   domain: required;
   *   prefix: optional;
   *   module: optional;
   * }
   *
   * Para renderizar un registro previo usar:
   * https://app.url/module/editor/index.html?id=123456789
   *
   * Para prueba en localhost:
   * localhost:3107/?id=123456789
   */

  useLayoutEffect(() => {
    const errors = [];
    const currentSession = new SessionStorageManager('editor-manager-conf');
    const storageConfigs = currentSession.getAsObject();
    if (typeof storageConfigs !== 'object' || _.isEmpty(storageConfigs)) errors.push('No configuration found.');
    if (!_.has(storageConfigs, 'domain')) errors.push(`param: 'domain' not found.`);
    if (!_.has(storageConfigs, 'identifier')) errors.push(`param: 'identifier' not found.`);
    if (errors.length > 0) throw new Error(errors.join(',\n'));
    errors.length = 0;
    updateBaseUrl(storageConfigs.domain, storageConfigs?.prefix);
    setConfigs(storageConfigs);
  }, []);

  return (configs !== undefined && !_.isEmpty(configs) &&
    <Editor
      domain={configs?.domain}
      prefix={configs?.prefix}
      module={configs?.module}
      identifier={configs?.identifier}
    />
  )
}

export default withBrowserRouter(App)();
