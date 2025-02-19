import {useEffect, useLayoutEffect} from "react";
import {useSearchParams} from "react-router-dom";
import withBrowserRouter from "app/wrappers/withBowserRouter";
import {updateBaseUrl} from "app/services/request";
import Editor from "app/views/Editor";

function App() {
  const [searchParams] = useSearchParams();
  const externalDomain = searchParams.get('domain');

  // useEffect(() => {
  //   if (externalDomain === null || externalDomain === undefined) return;
  //   console.log(externalDomain);
  //   updateBaseUrl(externalDomain);
  // }, [externalDomain]);

  useLayoutEffect(() => {
    console.log('baseurl loaded');
    updateBaseUrl('https://api.intranet.webdecero.dev', 'api-manager');
  }, []);

  return (
    <Editor />
  )
}

export default withBrowserRouter(App)();
