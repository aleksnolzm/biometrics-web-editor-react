import { BrowserRouter } from 'react-router-dom';

const withBrowserRouter = (Component) => (props) => {
  const WrapperComponent = () => (
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  );

  return WrapperComponent;
};

export default withBrowserRouter;

