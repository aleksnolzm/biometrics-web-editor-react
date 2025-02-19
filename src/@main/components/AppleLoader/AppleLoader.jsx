import './AppleLoader.module.css';
import clsx from 'clsx';

export const AppleLoader = ({ style, className, ...props }) => {
  return (
    <div className={clsx('spinner center', className)} style={style} {...props}>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
      <div className="spinner-blade"></div>
    </div>
  );
};