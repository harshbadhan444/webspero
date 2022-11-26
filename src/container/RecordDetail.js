import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useLocation } from "react-router-dom";
import { fetchData} from './../redux/action';
import { connect } from 'react-redux';
import { rows } from './../components/MockData';

function RecordDetail(props) {
  const location = useLocation();
  const[state, setState] = useState({
    id : props.record.record.data[0] && props.record.record.data[0].id,
    name : props.record.record.data[0] && props.record.record.data[0].name,
    gender : props.record.record.data[0] && props.record.record.data[0].gender,
    birth : props.record.record.data[0] && props.record.record.data[0].birth,
    birthLocation : props.record.record.data[0] && props.record.record.data[0].birthLocation,
    death : props.record.record.data[0] && props.record.record.data[0].death,
    deathLocation : props.record.record.data[0] && props.record.record.data[0].deathLocation,
    marriage : props.record.record.data[0] && props.record.record.data[0].marriage,
    spouse : props.record.record.data[0] && props.record.record.data[0].spouse,
  })

  const [openSuccessMessage, setOpenSuccessMessage] = useState(false)
  const [openWarningMessage, setOpenWarningMessage] = useState(false)

  useEffect(() => {
    props.fetchData(location.pathname.split("/")[2])
  }, [])

  useEffect(() => {
    setState({
      ...state,
      id : props.record.record.data[0] && props.record.record.data[0].id,
      name : props.record.record.data[0] && props.record.record.data[0].name,
      gender : props.record.record.data[0] && props.record.record.data[0].gender,
      birth : props.record.record.data[0] && props.record.record.data[0].birth,
      birthLocation : props.record.record.data[0] && props.record.record.data[0].birthLocation,
      death : props.record.record.data[0] && props.record.record.data[0].death,
      deathLocation : props.record.record.data[0] && props.record.record.data[0].deathLocation,
      marriage : props.record.record.data[0] && props.record.record.data[0].marriage,
      spouse : props.record.record.data[0] && props.record.record.data[0].spouse,
    })
  }, [props])
  

  const handleEditInfo = () => {
    state.name ==="" || state.gender === "" || state.birth === "" || state.birthLocation === "" ? setOpenWarningMessage(true):
    setOpenSuccessMessage(true)
    rows.map(obj => [state].find(o => o.id === obj.id) || obj)
  }

  console.log(state.marriage)

  return (
    <Paper>
      <Box px={3} py={2}>
        <Typography variant="h6" align="center" margin="dense">
          Edit Family Record
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <TextField
              style={{ marginTop: "50px", width: "60%", marginLeft: "65%" }}
              required
              id="name"
              name="name"
              fullWidth
              margin="dense"
              value={state.name}
              onChange={(e) => setState({...state, name : e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl
              style={{ width: "60%", marginLeft: "65%", marginTop: "20px" }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                defaultValue={state.gender}
                value={state.gender}
                onChange={(e) => e.target.value === "M" ? setState({...state, gender : "M" }): e.target.value === "F" ? setState({...state, gender : "F" }) : setState({...state, gender : "O" })}
              >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
                <MenuItem value={"O"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={10.15} style={{marginTop: "25px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Birth"
                inputFormat="DD/MM/YYYY"
                value={state.birth}
                onChange={(e) => setState({...state, birth : e.$d})}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextareaAutosize
              aria-label="Birth Location"
              maxRows={1}
              value={state.birthLocation}
              onChange={(e) => setState({...state, birthLocation: e.target.value})}
              style={{ width: "60%", height: "50px", marginLeft: "65%",marginTop: "25px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={10.15} style={{marginTop: "25px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Death"
                inputFormat="DD/MM/YYYY"
                value={state.death}
                onChange={(e) => setState({...state, death : e.$d})}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} >
            <TextareaAutosize
              aria-label="Death location"
              maxRows={1}
              style={{ width: "60%", height: "50px", marginLeft: "65%", marginTop: "25px"}}
              value={state.deathLocation}
              onChange={(e) => setState({...state, deathLocation: e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={10.15} style={{marginTop: "25px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                style={{ width: "60%", marginLeft: "65%", marginTop: "20px" }}
                label="Marriage"
                inputFormat="DD/MM/YYYY"
                value={state.marriage}
                onChange={(e) => setState({...state, marriage : e.$d})}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <TextField
              style={{ marginTop: "50px", width: "60%", marginLeft: "65%" }}
              required
              id="spouse"
              name="spouse"
              fullWidth
              margin="dense"
              value={state.spouse}
              onChange={(e) => setState({...state, spouse : e.target.value})}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={handleEditInfo}>
            Edit Record
          </Button>
        </Box>
      </Box>
      <Snackbar open={openSuccessMessage} color="success" message={"Success!"} autoHideDuration={6000} onClose={() => setOpenSuccessMessage(false)}/>
      <Snackbar open={openWarningMessage} color="success" message={"Waring! Please fill all fields"} autoHideDuration={6000} onClose={() => setOpenWarningMessage(false)}/>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    record : state
  }
}

export default connect(mapStateToProps, {fetchData})(RecordDetail)


