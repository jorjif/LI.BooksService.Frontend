import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'

import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel'

import user2 from '../../assets/user-2.jpg'
import user3 from '../../assets/user-3.jpg'
import user4 from '../../assets/user-4.jpg'

import './Selection.scss'

const RESULT = [
  {
    id: 1,
    user: 'LexLuthor',
    avatar: user2,
    genre: 'Фантастика',
    accuracy: 98,
  },
  {
    id: 2,
    user: 'ChloeSallivan',
    avatar: user3,
    genre: 'Фантастика',
    accuracy: 91,
  },
  {
    id: 3,
    user: 'LanaLang',
    avatar: user4,
    genre: 'Научпоп',
    accuracy: 74,
  },
]

const Selection = () => (
  <>
    <Typography variant="h6" color="primary">Выберите предложение:</Typography>

    <Box sx={{ overflow: 'auto', height: 'calc(100% - 48px)' }} mt={1}>
      {RESULT.map(item => (
        <Card key={item.id} className="card" sx={{ display: 'flex', margin: 2 }}>
          <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={item.avatar}
              alt={item.user}
          />

          <CardContent sx={{ display: 'flex', flexGrow: 1 }}>
            <Box pr={2} sx={{ flexGrow: 1, margin: 'auto 0' }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {item.user}
              </Typography>
              <Typography variant="h5" component="div">
                {item.genre}
              </Typography>
            </Box>
            <CircularProgressWithLabel style={{ margin: 'auto 0' }} value={item.accuracy} />
          </CardContent>
        </Card>
      ))}
    </Box>
  </>
)

export default Selection
