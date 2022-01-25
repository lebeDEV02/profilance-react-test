import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { authStyles } from '../styles/mui-custom/login-button';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import arrayOfAdminData from '../mock-jsons/Admin';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/userSlice';

export default function AuthButton({ className }) {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user.user);

	const [error, setError] = useState('');

	const Login = (data) => {
		if (
			arrayOfAdminData.filter((item) => {
				return item.password === data.password && item.login === data.login;
			}).length
		) {
			setError('');
			dispatch(login({ login: data.login, password: data.password }));
			handleClose();
		} else {
			setError('Пользователя с такими данными не существует');
		}
	};

	const Logout = () => {
		dispatch(logout());
	};

	const {
		control,
		handleSubmit,
		formState: { isValid },
		register,
		reset,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		mode: 'onBlur',
	});

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		reset();
		setError('');
	};

	const onSubmit = (data) => {
		Login(data);
	};

	return (
		<div className={className}>
			<Button onClick={handleClickOpen} sx={authStyles}>
				{user.login !== '' ? 'Выйти из аккаунта' : 'Авторизоваться'}
			</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle sx={{ textAlign: 'center', marginTop: '10px' }}>
					{user.login !== '' ? 'Вы авторизованы' : 'Авторизуйтесь'}
				</DialogTitle>
				{user.login !== '' ? (
					<div className="logout">
						<Button className="logout__button" onClick={Logout} sx={authStyles}>
							Выйти из аккаунта
						</Button>
					</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className="auth-form">
						<label>
							{' '}
							Логин
							<Controller
								{...register('login', { required: 'true' })}
								control={control}
								render={({ field }) => (
									<Input
										onInput={() => setError('')}
										className="auth-form__input"
										type="text"
										{...field}
									/>
								)}
							/>
						</label>
						<label>
							Пароль
							<Controller
								{...register('password', { required: 'true' })}
								control={control}
								render={({ field }) => (
									<Input
										onInput={() => setError('')}
										className="auth-form__input"
										type="password"
										{...field}
									/>
								)}
							/>
						</label>
						<input
							type="submit"
							disabled={!isValid}
							className="auth-form__submit"
							value="Авторизоваться"
						/>
						{error ? (
							<p className="auth-form__error">Пользователя с такими данными не существует!</p>
						) : (
							''
						)}
					</form>
				)}
			</Dialog>
		</div>
	);
}
