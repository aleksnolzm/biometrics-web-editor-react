import {stringToKebabCase} from "app/utils/transformers";

export const emitMainMessage = (identifier, dataContent) => {
  const data = Array.isArray(dataContent) ? dataContent : dataContent ? [dataContent] : [];

  if (typeof identifier !== 'number') return;
  window.parent.postMessage(
    {
      action: 'builder-on-message',
      id: identifier,
      success: true,
      data,
    },
    '*');
};

export const emitErrorMessage = (identifier, errorContent) => {
  if (typeof identifier !== 'number') return;
  window.parent.postMessage(
    {
      action: 'builder-on-message',
      id: identifier,
      success: false,
      data: errorContent,
    },
    '*');
}

export const emitCustomMessage = (identifier, eventName, data) => {
  if (typeof identifier !== 'number') return;
  if (typeof eventName === 'string' || eventName.length === 0) return;
  const transformedEventName = stringToKebabCase(eventName);
  window.parent.postMessage(
    {
      action: `builder-on-${transformedEventName}`,
      id: identifier,
      success: true,
      data,
    },
    '*');
}