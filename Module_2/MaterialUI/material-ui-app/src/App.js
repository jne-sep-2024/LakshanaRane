import React from "react";
import {
  Button,
  ButtonGroup,
  ButtonBase,
  TextField,
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Snackbar,
  Grid2,
  Box,

} from "@mui/material";
import {makeStyles} from '@mui/styles'
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
const useStyles=makeStyles((theme)=>({

  customButton:{
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: 'black',
      
  },
},
}))

function App() {
  const classes= useStyles();
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [name,setName]=useState('');
  

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event) => {
  
    setSnackbarOpen(false);
  };

  const showSnackbar = () => {
    setSnackbarOpen(true);
  };

  const handleSubmit=()=>{
    alert(`Name: ${name}` )
  }

  

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3">
        Material-UI Concepts
      </Typography>

      <ButtonGroup variant="contained" >
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={showSnackbar}
      >
        Save
      </Button>
        <Button onClick={handleClickOpen} startIcon={<InfoIcon />}>
          Show Dialog
        </Button>
        <Button
          onClick={showSnackbar}
          startIcon={<DeleteIcon />}
          color="error"
        >
          Delete
        </Button>
      </ButtonGroup>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Action performed"
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography>This is a simple dialog example.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Grid2 container spacing={2} style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((item) => (
          <Grid2 item xs={12} sm={6}  md={4} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a description of card {item}.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>

    <Button className={classes.customButton}>
      Custom Button( with makeStyles hook)
    </Button>
    <TextField
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        This is a Container
      </Typography>
      <Typography variant="body1">
        The container limits the width of its content to make it more readable on larger screens.
      </Typography>
    </Container>
    <Box>

    </Box>
    </div>
  );
}

export default App;
