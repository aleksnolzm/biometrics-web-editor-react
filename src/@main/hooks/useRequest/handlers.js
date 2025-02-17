const networkErrorCodes = [
  'ERR_NETWORK',
  'ERR_CERT_COMMON_NAME_INVALID',
  'ERR_NAME_NOT_RESOLVED',
  'ERR_CONNECTION_TIMED_OUT',
  'ERR_BAD_REQUEST',
  'ERR_BAD_RESPONSE',
];

export function getErrMessages(errRequest) {
  if (errRequest.response?.data && errRequest.response?.data?.messages) {
    return errRequest.response.data.messages;
  }

  if (
    errRequest.response?.data &&
    !errRequest.response.data.messages &&
    errRequest.response.data.message
  ) {
    return [errRequest.response.data.message];
  }

  if (errRequest.response && errRequest.response.status) {
    return [`${errRequest.response.status?.toString()}: ${errRequest.message}`];
  }

  if (networkErrorCodes.includes(errRequest.code)) {
    return [`${errRequest?.code?.toString()}: ${errRequest.message}`];
  }
  return [];
}
