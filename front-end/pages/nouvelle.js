import Layout from '../components/Layout'
import Head from 'next/head'
// Material ui
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const Nouvelle = () => {

  return (
    <>
      <Head>
        <title>Nouvelle</title>
      </Head>

      <Layout>
        <header>
          <h1>CREATION NOUVELLE AMAP</h1>
        </header>

        <form autoComplete="off">
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Typography variant="h3" align="center">Mon AMAP</Typography>
              <Grid item xs={12}>
                <TextField id="name" label="Nom de l'AMAP" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="address" label="Adresse" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField id="lat" label="Latitude" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField id="long" label="Longitude" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="phone" label="Numéro de téléphone" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="email" label="Adresse email" fullWidth />
              </Grid>
              <Button variant="contained" type="submit" color="primary">Ajouter mon AMAP</Button>
            </Grid>
          </Paper>
        </form>
      </Layout>
    </>
  )
}
export default Nouvelle