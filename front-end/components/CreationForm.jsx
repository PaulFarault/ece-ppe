import { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
// Material ui
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default () => {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios(
      {
        method: 'post',
        url: `http://localhost:3001/amap`,
        data: {
          name,
          address,
          lat,
          long,
          phone,
          email
        }
      }
    )
    setOpen(true)
    setName("")
    setAddress("")
    setLat("")
    setLong("")
    setPhone("")
    setEmail("")
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [locations, setLocations] = useState([])

  useEffect(() => {
    if (address !== "") {
      fetchLocations()
    } else {
      setLocations([])
    }
  }, [address])


  const fetchLocations = async () => {
    let response = await fetch(' https://api-adresse.data.gouv.fr/search/?q=' + address + '&autocomplete=1&limit=7&type=housenumber')
    response = await response.json()
    setLocations(response.features)
  }

  const fetchLocation = async (event, value) => {
    let response = await fetch(' https://api-adresse.data.gouv.fr/search/?q=' + value + '&autocomplete=0&limit=1&type=housenumber')
    response = await response.json()
    setLat(response.features[0].geometry.coordinates[1])
    setLong(response.features[0].geometry.coordinates[0])
  }


  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Typography variant="h3" align="center">Mon AMAP</Typography>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Nom de l'AMAP"
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>

              <Autocomplete
                onChange={fetchLocation}
                inputValue={address}
                onInputChange={(event, newAdress) => {
                  setAddress(newAdress);
                }}
                options={locations.map(loc => loc.properties.label)}
                renderInput={(params) => <TextField {...params} label="Addresse" />}
              />


            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">Lat: {lat}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">Long: {long}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                label="Numéro de téléphone"
                fullWidth
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Adresse email"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <div style={{ textAlign: "center", width: "100%" }}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
              >
                Ajouter mon AMAP
              </Button>
            </div>
          </Grid>
        </Paper>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            L'amap a bien été créée !
        </Alert>
        </Snackbar>
      </form>
    </>
  )
}