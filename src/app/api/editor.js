import request from '../services/request';

export function getContentById(id, dir) {
  return request({
    url: `/${dir || ''}${dir ? '/' : ''}editor/${id}`,
    method: 'GET',
  });
}

export function updateContent(data, id, dir) {
  return request({
    url: `/${dir || ''}${dir ? '/' : ''}editor/${id}`,
    method: 'PUT',
    data,
  });
}
