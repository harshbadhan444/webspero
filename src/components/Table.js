import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDatas } from './../redux/action';

 function Tables(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    props.fetchDatas()
  },[])

  console.log(props);


  return (
    <>
    {props.record.records.loading ? <h4>Loading.....</h4> : 
    <TableContainer sx={{maxWidth : "800px", marginLeft: "25%", marginTop:"5%"}} component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow><h3 align="center" style={{marginLeft:"20px"}}>Family Record</h3></TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Parents & Siblings</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Birth</TableCell>
            <TableCell align="right">Birth Location</TableCell>
            <TableCell align="right">Death</TableCell>
            <TableCell align="right">Death Location</TableCell>
            <TableCell align="right">Marriage</TableCell>
            <TableCell align="right">Spouse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.record.records.data && props.record.records.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}
            >
              <TableCell component="th" scope="row" onClick={() => navigate(`/detail/${row.id}`)}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.birth}</TableCell>
              <TableCell align="right">{row.birthLocation}</TableCell>
              <TableCell align="right">{row.death}</TableCell>
              <TableCell align="right">{row.deathLocation}</TableCell>
              <TableCell align="right">{row.marriage}</TableCell>
              <TableCell align="right">{row.spouse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    record : state
  }
}

export default connect(mapStateToProps, { fetchDatas})(Tables)

