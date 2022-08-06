import { Autocomplete, Button, IconButton, InputAdornment, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useEffect,useState} from "react";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import fabricantes from "../styles/list_fab";
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import categorias from "../styles/list-cat";



export default function Home(props) {

    const { control, handleSubmit } = useForm();

    const onSubmit = function (data) {
        let axiosConfig = {
            mode: 'no-cors',

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post("http://localhost:3003/sistema/dado/", JSON.stringify(data), axiosConfig)
            .then(data => {
                console.log(data, typeof data)
            }).catch(err => {
                console.log(err)
            })
    }


    ////////////////////////////////////////////////////////////////////////////////////////

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => setOpen(true);

    const handleClose = () => setOpen(false);

    const [dado, setDado] = useState([]);

    useEffect( () =>  {

        let axiosConfig = {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.get("http://localhost:3003/sistema/dado/", axiosConfig)
          .then(res => {
            setDado(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    })

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '30px',
                paddingLeft: '15%',
                paddingRight: '15%',
                height: '100vh',

            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',


                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '70vh'


                        }}>
                            <Typography variant='h4' sx={{ color: '#2d4c83' }}>
                                FABRICANTE E CATEGORIA
                            </Typography>

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>FABRICANTE</Typography>
                            </InputLabel>
                            <Controller
                                name='fab'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="fab"
                                        label='Digite o nome do Fabricante'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>CATEGORIA</Typography>
                            </InputLabel>

                            <Controller
                                name='cat1'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="cat1"
                                        label='Digite o nome do categoria 1'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />

                            <Controller
                                name='cat2'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="cat2"
                                        label='Digite o nome do categoria 2'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />

                            <Controller
                                name='cat3'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="cat3"
                                        label='Digite o nome do categoria 3'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />


                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '70vh',


                        }}>
                            <Typography variant='h4' sx={{ color: '#2d4c83' }}>
                                PRODUTOS
                            </Typography>

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>NOME DO PRODUTO</Typography>
                            </InputLabel>
                            <Controller
                                name='prod'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="prod"
                                        label='Digite o nome do produto'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>FABRICANTE</Typography>
                            </InputLabel>

                            <Controller
                                name='fab_selec'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Autocomplete

                                        disablePortal
                                        options={fabricantes}
                                        sx={{ width: 480 }}
                                        renderInput={(params) => <TextField fullWidth {...params} label='Selecione o fabricante' />}

                                        onChange={(_, data) => {
                                            onChange(data);
                                            return data;
                                        }}
                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>CATEGORIA</Typography>
                            </InputLabel>

                            <Controller
                                name='cat_selec'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Autocomplete
                                        disablePortal
                                        options={categorias}
                                        sx={{ width: 480 }}
                                        renderInput={(params) => <TextField fullWidth {...params} label='Selecione a categoria' />}

                                        onChange={(_, data) => {
                                            onChange(data);
                                            return data;
                                        }}
                                    />
                                )}
                            />

                            <InputLabel shrink htmlFor="bootstrap-input">
                                <Typography variant='h5' sx={{ color: '#2d4c83' }}>PREÇO</Typography>
                            </InputLabel>

                            <Controller
                                name='preco'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        id="preco"
                                        label='Digite o preço'
                                        variant="outlined"
                                        fullWidth

                                    />
                                )}
                            />
                        </Box>

                    </Box>
                    <Box sx={{ paddingTop: '30px' }}>
                        <Button type="submit" variant='contained'>Adicionar</Button>
                    </Box>
                </form>

                <Box sx ={{ marginTop: '30px'}}>
                    <Controller
                        name='busca'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                onChange={onChange}
                                value={value}
                                id="busca"
                                label='Sua Busca'
                                variant="outlined"
                            >
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"

                                        edge="end"
                                    >
                                        <SearchIcon sx={{ color: 'red' }} />
                                    </IconButton>
                                </InputAdornment>
                            </TextField>
                        )}
                    />

                </Box>


                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                   
                        <Box sx={{
                            margin: '40px 0 40px '
                        }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 1110 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{color: '#2d4c83'}}>ID </TableCell>
                                            <TableCell sx={{color: '#2d4c83'}} align="right">Nome Produto</TableCell>
                                            <TableCell sx={{color: '#2d4c83'}} align="right">Fabricante</TableCell>
                                            <TableCell sx={{color: '#2d4c83'}} align="right">Categoria</TableCell>
                                            <TableCell sx={{color: '#2d4c83'}} align="right">Preço</TableCell>
                                            <TableCell sx={{color: '#2d4c83'}} align="right">Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dado.map((dados) => (
                                            <TableRow key={dados.id}>
                                                <TableCell sx={{color: '#2d4c83'}} component="th" scope="row">
                                                    {dados.id}
                                                </TableCell>
                                                <TableCell sx={{color: '#2d4c83'}} align="right">{dados.prod}</TableCell>
                                                <TableCell sx={{color: '#2d4c83'}} align="right">{dados.fab}</TableCell>
                                                <TableCell sx={{color: '#2d4c83'}} align="right">{dados.cat1}</TableCell>
                                                <TableCell sx={{color: '#2d4c83'}} align="right">{dados.preco}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained" color='primary'>
                                                        <a style={{color: 'white', textDecoration: 'none'}} href={`/gerencia/EDITA/${dados.id}/`}>
                                                            Editar Equipes
                                                        </a>
                                                    </Button>

                                                    <Button sx={{marginLeft: '20px'}} onClick={handleClickOpen} variant="contained" color="primary" >
                                                        Deletar
                                                    </Button>
                                                    <Dialog
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">
                                                            {"Tem certeza que deseja DELETAR esté produto?"}
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                Assim que está operacão for confirmada, a mesma não poderá ser revertida.
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>

                                                            <Button color="primary" onClick={handleClose}>Cancelar</Button>

                                                            <Link to={`/DELETA/DELETE/${dados.id}/`}>
                                                                <Button color="primary" onClick={handleClose} autoFocus>
                                                                    Deletar
                                                                </Button>
                                                            </Link>
                                                        </DialogActions>
                                                    </Dialog>

                                                </TableCell>
                                            </TableRow>

                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                </Box>
            </Box>
        </div>
    )
}