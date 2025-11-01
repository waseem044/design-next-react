"use client";
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  IconButton,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './muiStyle.scss';

export default function MUIRegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [dob, setDob] = useState(null);
  const [addresses, setAddresses] = useState([{ id: Date.now(), street: '', city: '', state: '', zip: '' }]);
  const [phones, setPhones] = useState([{ id: 1, type: 'mobile', number: '' }]);
  const [files, setFiles] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFileChange = (e) => {
    const chosen = Array.from(e.target.files).map((f) => ({ file: f, id: URL.createObjectURL(f) }));
    setFiles((prev) => [...prev, ...chosen]);
  };
  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const addAddress = () => setAddresses((prev) => [...prev, { id: Date.now(), street: '', city: '', state: '', zip: '' }]);
  const removeAddress = (id) => setAddresses((prev) => prev.filter((a) => a.id !== id));
  const updateAddress = (id, key, val) => setAddresses((prev) => prev.map((a) => (a.id === id ? { ...a, [key]: val } : a)));

  const addPhone = () => setPhones((prev) => [...prev, { id: Date.now(), type: 'mobile', number: '' }]);
  const removePhone = (id) => setPhones((prev) => prev.filter((p) => p.id !== id));
  const updatePhone = (id, key, val) => setPhones((prev) => prev.map((p) => (p.id === id ? { ...p, [key]: val } : p)));

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      gender,
      dob: dob ? dayjs(dob).format('YYYY-MM-DD') : null,
      addresses,
      phones,
      files: files.map((f) => f.file.name),
      termsAccepted,
    };
    console.log('Registration data', data);
    alert('Form submitted');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }} elevation={3}>
          <Typography variant="h4" gutterBottom className='mui-register-head'>Registration Form</Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="First Name" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Last Name" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePicker label="Date of Birth" value={dob} onChange={(v) => setDob(v)} />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6">Addresses</Typography>
                <Stack spacing={2}>
                  {addresses.map((addr) => (
                    <Paper key={addr.id} sx={{ p: 2 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                          <TextField label="Street" fullWidth value={addr.street} onChange={(e) => updateAddress(addr.id, 'street', e.target.value)} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField label="City" fullWidth value={addr.city} onChange={(e) => updateAddress(addr.id, 'city', e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <TextField label="State" fullWidth value={addr.state} onChange={(e) => updateAddress(addr.id, 'state', e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={1}>
                          <TextField label="Zip" fullWidth value={addr.zip} onChange={(e) => updateAddress(addr.id, 'zip', e.target.value)} />
                        </Grid>
                        <Grid item xs={12} textAlign="right">
                          <IconButton onClick={() => removeAddress(addr.id)}><DeleteIcon /></IconButton>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                  <Button startIcon={<AddIcon />} onClick={addAddress}>Add Address</Button>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6">Phone Numbers</Typography>
                <Stack spacing={2}>
                  {phones.map((p) => (
                    <Grid container spacing={1} key={p.id} alignItems="center">
                      <Grid item xs={12} md={3}>
                        <Select fullWidth value={p.type} onChange={(e) => updatePhone(p.id, 'type', e.target.value)}>
                          <MenuItem value="mobile">Mobile</MenuItem>
                          <MenuItem value="home">Home</MenuItem>
                          <MenuItem value="work">Work</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField label="Phone Number" fullWidth value={p.number} onChange={(e) => updatePhone(p.id, 'number', e.target.value)} />
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <IconButton onClick={() => removePhone(p.id)}><RemoveIcon /></IconButton>
                      </Grid>
                    </Grid>
                  ))}
                  <Button startIcon={<AddIcon />} onClick={addPhone}>Add Phone</Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid item xs={8}>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6">File Upload</Typography>
                <Stack spacing={1}>
                  <Button variant="outlined" component="label" startIcon={<UploadFileIcon />}>
                    Upload Files
                    <input hidden multiple type="file" onChange={handleFileChange} />
                  </Button>
                  <Box>
                    {files.map((f) => (
                      <Chip key={f.id} label={f.file.name} onDelete={() => removeFile(f.id)} sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />} label="I accept the terms and conditions" />
              </Grid>

              <Grid item xs={12} textAlign="right">
                <Button variant="contained" type="submit">Register</Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}
