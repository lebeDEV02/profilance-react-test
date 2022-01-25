import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authStyles } from '../styles/mui-custom/login-button';
export default function AuthButton({ classNames }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<button className={classNames}>
			<Button onClick={handleClickOpen} sx={authStyles}>
				Авторизоваться
			</Button>
			<form>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Авторизуйтесь</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Ваша почта"
							type="email"
							fullWidth
							variant="standard"
						/>
						<TextField
							autoFocus
							margin="dense"
							id="password"
							label="Ваш пароль"
							type="password"
							fullWidth
							variant="standard"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Отмена</Button>
						<Button onClick={handleClose}>Войти</Button>
					</DialogActions>
				</Dialog>
			</form>
		</button>
	);
}
