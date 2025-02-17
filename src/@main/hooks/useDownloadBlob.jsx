import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { showMessage } from 'app/store/core/messageSlice';
import { useRequest } from './useRequest/useRequest';

/**
 * Default options for the download.
 * @type {Object}
 * @property {string} name - The name of the file to download.
 * @property {string|undefined} type - The type of the file to download.
 * @property {boolean} externParams - Whether to use external parameters instead of default request parameters.
 */
const defaultOptions = {
  name: 'document',
  type: undefined,
  externParams: false,
};

/**
 * Custom hook for downloading a blob file with progress tracking and error handling.
 *
 * @param {Object} catalogTypes - An object containing information about available file types.
 * @param {Function} [catalogFunction=() => Promise] - A function that returns a Promise for fetching the file.
 * @returns {Object} An object containing the following properties:
 *  - `formats` {Array<Object>} - An array of available formats to download.
 *  - `tryDownload` {Function} - A function to initiate the download.
 *  - `progress` {number} - The current download progress as a percentage.
 *  - `isLoading` {boolean} - A boolean indicating whether the download is in progress.
 */
export const useDownloadBlob = (catalogTypes, catalogFunction = () => new Promise()) => {
  const Dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [formats, setCatalogFormats] = useState([]);

  const { makeRequest: tryExportFile, isLoading } = useRequest(catalogFunction);

  const onDownloadProgress = ({ loaded, total }) => {
    if (total === undefined) {
      return;
    }
    // eslint-disable-next-line no-bitwise
    const fetchingPercent = ((loaded * 100) / total) | 0;
    requestAnimationFrame(() => {
      setProgress(fetchingPercent);
    });
  };

  const handleTransformCatalog = (catalogObj) => {
    const transformedCatalog = Object.keys(catalogObj).map((key) => {
      if (catalogObj[key].label === undefined) {
        throw new Error(`Item ${key} has no prop named 'label'`);
      }
      if (catalogObj[key].extension === undefined) {
        throw new Error(`Item ${key} has no prop named 'extension'`);
      }
      if (catalogObj[key].format === undefined) {
        throw new Error(`Item ${key} has no prop named 'format'`);
      }
      if (catalogObj[key].symbol === undefined) {
        throw new Error(`Item ${key} has no prop named 'symbol'`);
      }
      return {
        label: catalogObj[key].label,
        value: catalogObj[key].extension,
      };
    });
    setCatalogFormats(transformedCatalog);
  };

  useEffect(() => {
    if (catalogTypes === undefined || typeof catalogTypes !== 'object' || _.isEmpty(catalogTypes)) return;
    handleTransformCatalog(catalogTypes);
  }, [catalogTypes]);

  /**
   * Attempts to download a file using the provided options and request parameters.
   *
   * @param {Object} [entryOptions={}] - Options for the download, including `type` and `externParams`.
   * @param {...any} args - Additional arguments to pass to the request function.
   * @throws {Error} Throws an error if the `type` option is not provided or if the download fails.
   */
  const tryDownload = async (entryOptions = {}, ...args) => {
    if (entryOptions.type === undefined || !entryOptions || typeof entryOptions !== 'object') {
      throw new Error(`'type' option was not found in function`);
    }
    const options = _.merge(defaultOptions, entryOptions);
    const defaultReqParams = { format: catalogTypes[options.type].symbol };
    const reqParams = [
      ...(options.externParams ? args : [defaultReqParams]),
      { onDownloadProgress },
    ];

    return tryExportFile(...reqParams)
      .then(({ isOk, successContent }) => {
        console.log(isOk, successContent);
        if (!isOk) {
          Dispatch(
            showMessage({
              message: 'Ocurrió un error al intentar descargar el archivo',
              variant: 'primary',
            })
          );
          throw new Error('Failed to obtain file from server');
        } else {
          const url = window.URL.createObjectURL(
            new Blob([successContent], { type: catalogTypes[options.type].format })
          );
          const link = document.createElement('a');
          link.style.display = 'none';
          link.href = url;
          const fileName = `${options.name}.${catalogTypes[options.type].extension}`;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setProgress(0);
      });
  }

  useEffect(() => {
    return () => {
      setProgress(0);
    };
  }, []);

  return {
    /**
     * An array of available formats to download.
     * @type {Array<Object>}
     * @property {string} label - The display label of the format.
     * @property {string} value - The file extension of the format.
     */
    formats,

    /**
     * Function to initiate the download process.
     * @function
     * @param {Object} [entryOptions={}] - Options for the download.
     * @param {...any} args - Additional arguments for the request function.
     */
    tryDownload,

    /**
     * Current download progress as a percentage.
     * @type {number}
     */
    progress,

    /**
     * Indicates whether the download is currently in progress.
     * @type {boolean}
     */
    isLoading,
  };
};
