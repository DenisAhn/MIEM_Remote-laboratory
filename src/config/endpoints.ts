//TODO Это пример прописания Эндпоинтов,
// как swagger получим нужно будет переделать под нас
/*
const getUserPrefix = (path: string) => `users/${path}`;

const getOrdersPrefix = (path: string) => `orders/${path}`;

const getAdminPrefix = (path: string) => `admin/${path}`;

const getAuthPrefix = (path: string) => `auth/${path}`;

export const ENDPOINTS = {
  user: {
    current: {
      url: getUserPrefix('current'),
      method: 'GET',
    },
    list: {
      url: getAdminPrefix('get-tenants'),
      method: 'POST',
    },
    registration: {
      url: getUserPrefix('registration'),
      method: 'POST',
    },
    confirmation: {
      url: getUserPrefix('confirmation'),
    },
    create: {
      url: getAdminPrefix('create-tenant'),
      method: 'POST',
    },
    personalInfo: {
      url: `${getAdminPrefix('get-tenant')}/{id}`,
      method: 'GET',
    },
  },
  auth: {
    login: {
      url: getAuthPrefix('login'),
      method: 'POST',
    },
  },
  orders: {
    list: {
      url: getOrdersPrefix(''),
    },
    listById: {
      url: `${getAdminPrefix('get-order')}/{id}`,
      method: 'GET',
    },
  },
};
*/
