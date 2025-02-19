import './Loader.css';
import { AppleLoader } from "@main/components/AppleLoader/AppleLoader";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <AppleLoader className="loader-circle" />
        <p>Cargando...</p>
      </div>
    </div>
  )
}

export default Loader;
