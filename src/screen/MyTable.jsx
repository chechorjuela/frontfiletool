import * as React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GET_FILES_ALL_REQUEST} from '../redux/types';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDebounce} from "../hook/useDebounce";
import LoadingSpinner from "../component/loadingSpinner/LoadingSpinner";

export default function MyTable() {
  const [fileSearch, setFileSearch] = useState('');
  const isLoading = useSelector(state => state.files.loadingRequest);

  const debouncedSearch = useDebounce(fileSearch, 1500);
  const filesRows = useSelector(state => state.files.files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_FILES_ALL_REQUEST})
  }, []);
  useEffect(() => {
    dispatch({type: GET_FILES_ALL_REQUEST, payload: fileSearch})
  }, [debouncedSearch]);

  return (<div className="container">

      <div>
        <br />
        <InputGroup className="mb-3">
          <Form.Control onChange={(event) => setFileSearch(event.target.value)}
                        aria-label="Dollar amount (with dot and two decimal places)"/>
        </InputGroup>
      </div>
      <h1>Files</h1>
      {isLoading ? <LoadingSpinner/> : (
        (filesRows !== undefined && filesRows.length > 0) ? (
          <div>
            <Table striped="columns">
              <thead>
              <tr>
                <th>Name file</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex.</th>
              </tr>
              </thead>
              <tbody>
              {filesRows.map((f, i) =>

                f.lines.map((l, e) => {
                  return (
                    <tr key={e}>
                      <td>{filesRows[i].file}</td>
                      <td>{l.text}</td>
                      <td>{l.number}</td>
                      <td>{l.hex}</td>
                    </tr>
                  )
                })
              )}
              </tbody>

            </Table>
          </div>
        ) : (
          <div><label>Don't Exist Files</label></div>
        )
      )}

    </div>
  );
}