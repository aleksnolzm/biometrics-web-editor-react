import './LoaderScreen.css';
import { AppleLoader } from "@main/components/AppleLoader/AppleLoader";

const LoaderScreen = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <AppleLoader className="loader-circle" />
        <p>Cargando...</p>
      </div>
    </div>
  )
}

export default LoaderScreen;
