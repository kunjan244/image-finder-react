import  { Box, Snackbar,makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    snack:{
        '&>*':{
        color:'#fff',
        background:'#000000'
        }
    }
})


const SnackBar= ({open, toggleSnack}) => {

    const classes=useStyles();
  const handleClose=( event, reason) => {
      if(reason ==='clickaway'){
          return;
      }
      toggleSnack(false);
  }
  
    return(
        <Box>
    <Snackbar className={classes.snack} open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert severity="info" onClose={handleClose}>
           Number of  Images should be between 3 and 200

          </MuiAlert>
    </Snackbar>
</Box>
)

}

export default SnackBar;