import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'

import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel'

import user2 from '../../assets/user-2.jpg'
import user3 from '../../assets/user-3.jpg'
import user4 from '../../assets/user-4.jpg'

import './Selection.scss'

const Selection = ({ data }: any) => {

  console.log('data', data)
  
  return (
    <>
      <Typography variant="h6" color="primary">Выберите предложение:</Typography>

      <Box sx={{ overflow: 'auto', height: 'calc(100% - 48px)' }} mt={1}>
        {data.map((item: any) => (
          <Card key={item.autorName} variant="outlined" className="card" sx={{ display: 'flex', margin: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={user2}
                alt={item.autorName}
            />

            <CardContent sx={{ display: 'flex', flexGrow: 1 }}>
              <Box pr={2} sx={{ flexGrow: 1, margin: 'auto 0' }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {item.autorName}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.dtoVariantes.variantesList[0].userValueCategories[0].category.name}
                </Typography>
              </Box>
              <CircularProgressWithLabel style={{ margin: 'auto 0' }} value={item.dtoVariantes.percentCoincidence} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Selection
