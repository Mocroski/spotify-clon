import React, { Component } from 'react'
import "./Footer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_left'>
                <p>Album and song details </p>
                </div>

                <div className='footer_center'>
                <ShuffleIcon className='footer_shuffle'/>
                <SkipPreviousIcon className='footer_previous'/>
                <PlayCircleIcon fontSize='large' className='footer_play'/>
                <SkipNextIcon className='footer_next'/>
                <RepeatIcon className='footer_repeat'/>

                </div>

                <div className='footer_right'>
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon />
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider aria-laberledby="continous-slider"/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Footer
