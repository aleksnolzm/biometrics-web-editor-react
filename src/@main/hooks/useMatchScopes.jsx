import { useEffect, useMemo } from 'react';
import { useRequest } from './useRequest/useRequest';

/**
 * useMatchScopes
 *
 * Este hook customizado recibe una lista de usuarios y una función para solicitar datos de permisos (scopes),
 * luego filtra los scopes basándose en la lista de usuarios proporcionada y retorna un objeto con la lista
 * filtrada de scopes y un listado plano de nombres de scopes.
 *
 * @param {string[]} currentUserList - Lista de usuarios actual (sus identificadores) que se utilizará para filtrar los scopes.
 * @param {Function} requestScopes - Función para solicitar datos de permisos (scopes) desde el servidor o alguna fuente de datos.
 *
 * @returns {Object} - Un objeto que contiene:
 * @returns {Array} return.list - Lista filtrada de scopes por usuarios, organizada en grupos con etiquetas y descripciones.
 * @returns {Array} return.namedList - Lista plana de nombres de scopes (valores) después de aplicar los filtros por usuarios.
 */
export const useMatchScopes = (currentUserList, requestScopes) => {
  const { makeRequest, response: fullScopeList } = useRequest(requestScopes);

  useEffect(() => {
    console.warn(currentUserList);
    if (typeof requestScopes !== 'function' || currentUserList === undefined || currentUserList.includes('*')) return;
    makeRequest();
  }, [requestScopes, currentUserList]);

  const list = useMemo(() => {
    if (!currentUserList || !fullScopeList) return [];
    if (currentUserList.includes('*')) {
      return [
        {
          label: undefined,
          description: undefined,
          scopes: ['Todos los alcances'],
        },
      ];
    }
    return fullScopeList
      .map((scopeGroup) => {
        const filteredScopes = Object.entries(scopeGroup.scopes)
          .filter(([key]) => currentUserList.includes(key))
          .map(([key, value]) => ({ key, value }));

        if (filteredScopes.length > 0) {
          return {
            label: scopeGroup.label,
            description: scopeGroup.description,
            scopes: filteredScopes,
          };
        }
        return null;
      })
      .filter((scopeGroup) => scopeGroup !== null);
  }, [currentUserList, fullScopeList]);

  const namedList = list.flatMap((scopeObj) => scopeObj.scopes.map((scope) => scope.value));

  return { list, namedList };
};
