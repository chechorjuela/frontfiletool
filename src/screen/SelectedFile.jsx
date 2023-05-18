import * as React from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {GET_FILE_BY_NAME_REQUEST} from "../redux/types";

const SelectedFile = (props) => {
  const {name} = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch({type: GET_FILE_BY_NAME_REQUEST, payload: name}), []);
  const filesRows = useSelector(state => state.filesSelected);

  useEffect(() => {
    if(filesRows){
      console.log(filesRows)
    }
  }, [filesRows]);


  return (
    <>Works!</>
  )
}
export default SelectedFile;