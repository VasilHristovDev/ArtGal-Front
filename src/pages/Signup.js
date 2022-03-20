import { TextField, Button } from '@mui/material';
import React from 'react';
import useSignUpForm from '../CustomHooks';
import Paper from '@mui/material/Paper';
import { signUp } from '../api/UserApi';

export default function SignUp() {

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signUp);


    return (
        <Paper elevation={3} sx={{width: '50%', margin: 'auto', mt: 10}}>
            <form onSubmit={handleSubmit}>
                <h1>Create An Account</h1>
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <TextField
                        name='name'
                        label='Name'
                        required
                        type='text'
                        size='small'
                        variant="outlined"
                        onChange={handleInputChange}
                        value={inputs.name}
                        sx={{mt: 5, mb:1, ml:'auto', mr:'auto', width: '100%'}}
                    />
                </div>
                <br />
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
                        sx={{mt: 1, mb:1, ml:'auto', mr:'auto', width: '100%'}}
                    />
                </div>
                <br />
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <TextField
                        name='age'
                        label='Age'
                        required
                        type='text'
                        size='small'
                        variant="outlined"
                        onChange={handleInputChange}
                        value={inputs.age}
                        sx={{mt: 1, mb: 1, ml:'auto', mr:'auto', width: '100%'}}
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
                <div style={{marginLeft: '50px', marginRight: '50px'}}>
                    <TextField
                        name='password_confirmation'
                        label='Confirm Password'
                        required
                        type='password'
                        size='small'
                        variant="outlined"
                        onChange={handleInputChange}
                        value={inputs.password_confirmation}
                        sx={{width: '100%'}}
                    />
                </div>
                <br />
                <div style={{marginLeft: '150px', marginRight: '150px', }}>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        type='submit'
                        sx={{width: '100%', marginBottom: '20px'}}
                    >
                        Sign Up
                    </Button>

                </div>
            </form>
        </Paper>
        
    );
}