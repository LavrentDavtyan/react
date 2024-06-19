import React, { useState } from 'react';

export const Signup = ({ users, onSubmit }) => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        login: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validate = () => {
        let validationErrors = {};
        if (!user.name) validationErrors.name = "Name is required.";
        if (!user.surname) validationErrors.surname = "Surname is required.";
        if (!user.login) {
            validationErrors.login = "Login is required.";
        } else if (!/\S+@\S+\.\S+/.test(user.login)) {
            validationErrors.login = "Login must be a valid email address.";
        } else if (users.some(u => u.login === user.login)) {
            validationErrors.login = "This login is already taken.";
        }
        if (user.password.length < 6) validationErrors.password = "Password must be at least 6 characters long.";
        return validationErrors;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(user);
            setSuccess('Signup successful!');
            setUser({ name: '', surname: '', login: '', password: '' });
            setErrors({});
            setTimeout(() => setSuccess(''), 5000);  // Clear success message after 5 seconds
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="surname">Surname:</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={user.surname}
                    onChange={e => setUser({ ...user, surname: e.target.value })}
                />
                {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
            <div>
                <label htmlFor="login">Login:</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    value={user.login}
                    onChange={e => setUser({ ...user, login: e.target.value })}
                />
                {errors.login && <p className="error">{errors.login}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={e => setUser({ ...user, password: e.target.value })}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
            {success && <p className="success">{success}</p>}
        </form>
    );
};
