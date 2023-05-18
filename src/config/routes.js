import MyTable from "../screen/MyTable";
import SelectedFile from "../screen/SelectedFile";

export const routes = [
  {
    path: '/',
    element: <MyTable />
  },
  {
    path: '/file/:name',
    element: <SelectedFile />
  }
];