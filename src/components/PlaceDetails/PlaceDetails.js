import { CardMedia } from '@material-ui/core'
import { Box, Typography, Button, Card, CarMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'

const PlaceDetails = ({ place }) => {
  const classes = useStyles()
  return (
    <div>{place.name}</div>
  )
}

export default PlaceDetails