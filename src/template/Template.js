import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { fetchData, searchMovie } from '../redux/action'
import { connect } from 'react-redux'

class Template extends React.Component {
  
  constructor(){
    super()
  }

  componentDidMount() {
    if(this.props.match) {
      this.props.searchMovie(this.props.match.params.searchTitle)
    } else {
      this.props.fetchData()
    }
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'left', margin: '20px 0px 0px 55px', fontSize: '20px' }}>
          <h3>Show your favorite movies</h3>
        </div>
        <div style={{ display: 'flex' , flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            this.props.data.loading && !this.props.data.error ?
              <img src="https://cdn.dribbble.com/users/68065/screenshots/2637273/space.gif" style={{ marginTop: '125px', height: '250px' }} />
              :
              (this.props.data.movies.length == '0' ?
                <p>Sorry, we can't find your movie</p>
                :
                this.props.data.movies.map((movie, i) =>
                  <div style={{margin:'20px'}}>
                    <Card style = {{width:'250px', height: '300px'}}>
                      <CardActionArea>
                        <CardMedia
                          image={movie.image ? movie.image : ''}
                          title="Contemplative Reptile"
                          style={{height:'200px'}}
                          key={i}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" style={{ fontFamily: 'Quicksand' }} key={i}>
                            {movie.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                )
              )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = { fetchData, searchMovie }

export default connect(mapStateToProps, mapDispatchToProps)(Template);