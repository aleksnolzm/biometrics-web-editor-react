import { useEffect, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import withBrowserRouter from "app/wrappers/withBowserRouter";
import { updateBaseUrl } from "app/services/request";
import Editor from "app/views/Editor";

function App() {
  const [searchParams] = useSearchParams();
  const externalDomain = searchParams.get('domain');
  const externalPrefix = searchParams.get('prefix');

  /**
   * Para inicializar con una prueba rapida, al inicializar vite
   * debera completar la url con esta informacion como ejemplo
   * http://localhost:3107/?id=6785ed5ace1e5c28de0e9a84&domain=https://api.intranet.webdecero.dev&prefix=api-manager
   * donde:
   * id: es el id del contenido a cargar
   * domain: es hacia que api apuntara el servicio de update y show
   * si prefix es indefinido simplemente no se cargara en la url
   */
  useLayoutEffect(() => {
    if (externalDomain === null || externalDomain === undefined) return;
    updateBaseUrl(externalDomain, externalPrefix);
  }, [externalDomain, externalPrefix]);

  return (
    <Editor />
  )
}

export default withBrowserRouter(App)();
