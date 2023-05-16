import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { Layout } from "../../components/layouts"

export default function HomePage() {
  return (
    <Layout title="Home - Open-Jira">

      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title= 'Pendientes' />
          <CardContent>

          </CardContent>

        </Card>
      </Grid>

      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title= 'En progueso' />
          <CardContent>
            
          </CardContent>

        </Card>
      </Grid>

      <Grid item xs={ 12 } sm={ 4 }>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title= 'Completadas' />
          <CardContent>
            
          </CardContent>

        </Card>
      </Grid>

    </Layout>
  )
}
