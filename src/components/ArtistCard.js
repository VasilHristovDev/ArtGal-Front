import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

export const ArtistCard = ({name, country, paintings, exhibitions, id, avatar_image}) => {
  return (
    <NavLink to={`/artists/${id}`}>
      <Card className='Artist-Card'>
        <CardContent className='Card-Content'>
          <Avatar className='Avatar' sx={{ width: 60, height: 60 }} src={{avatar_image}}/>
          <h3 className='Artist-Name'>{name}</h3>
          <span className='Artist-Country'>{country}</span>
        </CardContent>
        <Divider />
        <div className='Artist-Details'>
          <div className='Artist-Details-Child'>
            <p>Paintings</p>
            <p>{paintings}</p>
          </div>
          <div className='Artist-Details-Child'>
            <p>Exhibitions</p>
            <p>{exhibitions}</p>
          </div>
        </div>
      </Card>
    </NavLink>
    
  );
}

export default ArtistCard;