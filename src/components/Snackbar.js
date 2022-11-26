import React from 'react'
import Snackbar from '@mui/material/Snackbar';

function Snackbars({setOpenWarningMessage, setOpenSuccessMessage, openWarningMessage, openSuccessMessage,action}) {

  return (
    <Snackbar open={openSuccessMessage || openWarningMessage} color="success" message={`This is a ${openSuccessMessage ? "success" : "warning"} message!`} autoHideDuration={6000} onClose={setOpenSuccessMessage(false) || setOpenWarningMessage(false)}/>

  )
}

export default Snackbars