import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'

//
import BarraProgreso from './BarraProgreso'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    borderRadius: '5px',
}

const BasicModal = ({ mensaje, subtitulo, display }) => {
    return (
        <div>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        {mensaje}
                        {display && <BarraProgreso />}
                    </Typography>

                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}>
                        {subtitulo}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default BasicModal
