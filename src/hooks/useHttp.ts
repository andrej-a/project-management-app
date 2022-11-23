import { getCookie } from '../utils/cookie/getCookie';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzBiZmE4N2EwYTA2YjliN2M2ZGIxMCIsImxvZ2luIjoiTGl6YXZldGEiLCJpYXQiOjE2NjkyMjQ4MjAsImV4cCI6MTY2OTI2ODAyMH0.0Ec0sntx3cRPqfJ7rxezaPTeDV5UDqDEGaro7eRUP1M';

export const useHttp = () => {
  const request = async (
    url: string,
    method = 'GET',
    body = null,
    headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
    // Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
