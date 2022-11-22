export const url = 'https://kanban-lizaveta01.koyeb.app';

export const path = {
  auth: `${url}/auth`,
  users: `${url}/users`,
  boards: `${url}/boards`,
  file: `${url}/file`,
  points: `${url}/points`,
};

export enum HttpMetod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  CONTENT_TYPE = 'application/json',
}

export const enum Errors {
  BAD_REQUEST = 400,
  MISSING_TOKEN = 401,
  INVALID_TOKEN = 402,
  WRONG_INPUT_LOGIN = 403,
  NOT_FOUND_USER = 404,
  WRONG_INPUT_CREATE_USER = 422,
  USER_EXISTS = 417,
}
