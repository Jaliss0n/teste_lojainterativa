import React from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./DELETE.css"
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";

export default function DELETE () {

    const Delete = function (event) {
        const {id: id} = useParams();
        axios.delete(`http://localhost:3003/sistema/dado/${id}/`)
            .then(() => {
                console.log('DELETADO')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div id='caixa'>
            <div id='caixa_app'>
                <ThemeProvider theme={theme}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            O produto foi deletado com sucesso.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color ="secondary"size="small"><a href="/">Voltar</a></Button>
                        </CardActions>
                    </Card>
                </ThemeProvider>
            </div>
            {Delete()}
        </div>
    )
}

