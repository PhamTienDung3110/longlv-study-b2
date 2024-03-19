import { Button, Checkbox, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Snackbar, TextField } from '@mui/material'
import React, { useState } from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
interface LoginInfoInterface {
  email: string;
  password: string;
  remember_login: boolean;
}
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [infoLogin, setInfoLogin] = useState<LoginInfoInterface>({ email: "", password: "", remember_login: false });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [openToast,setOpenToast] = useState(false)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  const onLogin = async () => {
    const res = await axios.post(`http://localhost:8000/login`, { ...infoLogin });
    console.log(res);
    if (res.data.success) {
      localStorage.setItem('info', JSON.stringify(res.data));
    } else{
      setOpenToast(true);
    }
  }
  return (
    <div className='w-1/3 bg-white px-10 py-5'>
      <h3>Welcome to Vuexy!</h3>
      <p className='text-gray-300 mt-2'>Please sign-in to your account and start the adventure</p>
      <form>
        <div className=''>
          <label htmlFor="outlined-size-small" className='block mt-2'>Email or Username</label>
          <TextField
            value={infoLogin.email}
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className='w-full'
            sx={{ mt: 2 }}
            onChange={(e) => setInfoLogin({ ...infoLogin, email: e.target.value })}
          />
        </div>
        <div className=''>
          <label htmlFor="outlined-size-small" className='block mt-2'>Password</label>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <OutlinedInput
              value={infoLogin.password}
              onChange={(e) => setInfoLogin({ ...infoLogin, password: e.target.value })}
              size="small"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className='flex justify-between mt-5 mb-3'>
          <FormControlLabel control={<Checkbox value={infoLogin.remember_login} onChange={(e) => setInfoLogin({ ...infoLogin, remember_login: e.target.checked })} />} label="Remember me" />
          <p className='flex items-center text-blue-500'>Forgot password ?</p>
        </div>
        <Button variant="contained" fullWidth sx={{ mt: "10px" }} onClick={onLogin}>
          Login
        </Button>
        <div className='mt-4 text-center'>
          <p>New on our platform? <Link href="#" className='mr-2' underline="none">
            {'Create an account'}
          </Link></p>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <Divider className='w-2/5' />
          <span className='mx-2'>or</span>
          <Divider className='w-2/5' />
        </div>
        <div className='flex justify-center items-center'>
          <FacebookRoundedIcon color="primary" className='mx-2'></FacebookRoundedIcon>
          <CloudRoundedIcon color="primary" className='mx-2'></CloudRoundedIcon>
          <CloudRoundedIcon color="primary" className='mx-2'></CloudRoundedIcon>
          <CloudRoundedIcon color="primary" className='mx-2'></CloudRoundedIcon>
        </div>
      </form>
      <Snackbar
      open={openToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message="Login false"
      />
    </div>
  )
}

export default Login