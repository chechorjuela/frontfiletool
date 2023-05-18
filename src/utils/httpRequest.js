import axios from 'axios'

const customConfig = {
  headers: {
    'Content-Type': 'application/json'
  },
  'Access-Control-Allow-Origin': '*'
};

export const postRequest = async (url, obj) => {
  const request = await axios.post(url, obj, customConfig);
  return request;
};

export const getRequest = async (url) => {
  const request = await axios.get(url, customConfig);
  return request;
};

export const putRequest = async (url, id, obj) => {
  const request = await axios.put(`${url}/${id}`, obj, customConfig);
  return request;
};

export const deleteRequest = async (url, id) => {
  const request = await axios.delete(`${url}/${id}`, customConfig);
  return request;
}