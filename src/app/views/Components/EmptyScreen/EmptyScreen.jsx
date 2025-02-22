import './EmptyScreen.css';
import clsx from "clsx";

const LoaderScreen = ({ children, className, ...props }) => {
  if (typeof children !== 'string') throw new Error('El contenido debe ser de tipo texto');
  return (
    <div className={clsx('empty-container', className)} {...props}>
      <div className="empty-wrapper">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default LoaderScreen;
