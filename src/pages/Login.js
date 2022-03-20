import { TextField, Button } from '@mui/material';
import useSignUpForm from '../CustomHooks';
import Paper from '@mui/material/Paper';
import { logIn } from '../api/UserApi';
import React, { useState } from 'react';

export default function LogIn() {

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(logIn);

    return (
        <Paper elevation={3} sx={{width: '50%', margin: 'auto', mt: 10, mb: 33}} className='Login-Form'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In Now</h1>
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <TextField
                        name='email'
                        label='Email'
                        required
                        type='email'
                        size='small'
                        variant="outlined"
                        onChange={handleInputChange}
                        value={inputs.email}
                        sx={{mt: 3, mb:1, ml:'auto', mr:'auto', width: '100%'}}
                    />
                </div>
                <br />
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <TextField
                        name='password'
                        label='Password'
                        required
                        type='password'
                        size='small'
                        variant="outlined"
                        onChange={handleInputChange}
                        value={inputs.password}
                        sx={{mt: 1 , mb:1, width: '100%'}}
                    />
                </div>
                <br />
                <div style={{marginLeft: '150px', marginRight: '150px'}}>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        type='submit'
                        sx={{width: '100%', marginBottom: '20px'}}
                    >
                        Log In
                    </Button>
                </div>
            </form>
        </Paper>
    );
}