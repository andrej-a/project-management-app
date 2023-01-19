export enum requests {
  TYPE = 'application/json',
  SUCCESSFULL_REQUEST = 200,
  WARNING_MESSAGE_DURATION = 5000,
  SHORT_WARNING_MESSAGE_DURATION = 2000,
  DEFAULT__WARNING_MESSAGE = 'Internal error',
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const url = 'https://final-task-backend-production-3db5.up.railway.app';

export const path = {
  signup: `${url}/auth/signup`,
  signin: `${url}/auth/signin`,
  users: `${url}/users`,
  boards: `${url}/boards`,
  tasks: `${url}/tasksSet`,
  columns: `${url}/columnsSet`,
  file: `${url}/file`,
  points: `${url}/points`,
};

export enum Errors {
  BAD_REQUEST = 400,
  INVALID_TOKEN = 403,
  NOT_FOUND_USER = 404,
}
