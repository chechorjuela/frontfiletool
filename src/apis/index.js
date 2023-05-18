const urlBase = "http://localhost:5050/api";

export const apiRoute = {
  filesUrl : `${urlBase}/file/data`,
  fileByNameUrl : `${urlBase}/file/getFileByName/:name`
}