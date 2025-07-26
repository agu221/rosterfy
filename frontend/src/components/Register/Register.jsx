import React, { useState, useEffect } from 'react';
import styles from '../../styles/Register.module.css';
import logo from '../../assets/logo.png';
import { registerUser } from '../../api/auth';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: '',
        gender: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!firstName) validationErrors.firstName = 'First name is required';
        if (!lastName) validationErrors.lastName = 'Last name is required';
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) validationErrors.email = 'Invalid email';
        if (!phone || !/^\+?\d{7,15}$/.test(phone)) validationErrors.phone = 'Invalid phone number';
        if (!password || !/(?=.*\d)(?=.*[\W_]).{7,}/.test(password)) {
            validationErrors.password = 'Password must have at least 7 chars, a number, and a special character';
        }
        if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const {
            firstName,
            lastName,
            username,
            dobDay,
            dobMonth,
            dobYear,
            email,
            phone,
            password,
            confirmPassword,
            role,
            gender,
        } = form;

        try {
            if (password !== confirmPassword) throw new Error('Passwords do not match');

            const dob = new Date(`${dobYear}-${dobMonth}-${dobDay}`);
            await registerUser(username, firstName, lastName, dob, email, phone, password, role, gender);
        } catch (err) {
            alert(`Registration error: ${err.message}`);
        }
    };

    const renderOptions = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const days = renderOptions(1, 31);
    const years = renderOptions(new Date().getFullYear() - 85, new Date().getFullYear() - 10).reverse();

    return (
        <div className={styles.registerContainer}>
            <img src={logo} alt="Rosterfy Logo" className={styles.logo} />
            <div className={styles.slogan}>Manage your team</div>

            <form onSubmit={handleSubmit}>
                <div className={styles.nameRow}>
                    <div className={styles.nameField}>
                        <label htmlFor="firstName" className={styles.label}>First Name</label>
                        <input id="firstName" type="text" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className={styles.nameField}>
                        <label htmlFor="lastName" className={styles.label}>Last Name</label>
                        <input id="lastName" type="text" value={form.lastName} onChange={handleChange} required />
                    </div>
                    <div className={styles.nameField}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input id="username" type="text" value={form.username} onChange={handleChange} required />
                    </div>
                </div>

                <label className={styles.dobLabel}>Date of Birth</label>
                <div className={styles.dobRow}>
                    <select id="dobDay" value={form.dobDay} onChange={handleChange} required>
                        <option value="">Day</option>
                        {days.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <select id="dobMonth" value={form.dobMonth} onChange={handleChange} required>
                        <option value="">Month</option>
                        {[
                            'January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December',
                        ].map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
                    </select>
                    <select id="dobYear" value={form.dobYear} onChange={handleChange} required>
                        <option value="">Year</option>
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formSection}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <input type="email" id="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className={styles.formSection}>
                        <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                        <input type="tel" id="phone" value={form.phone} onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.nameRow}>
                    <div className={styles.nameField}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input id="password" type="password" value={form.password} onChange={handleChange} required />
                    </div>
                    <div className={styles.nameField}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formSection}>
                        <label htmlFor="role" className={styles.formLabel}>Role</label>
                        <select id="role" value={form.role} onChange={handleChange} required>
                            <option value="">Select Role</option>
                            <option value="player">Player</option>
                            <option value="coach">Coach</option>
                            <option value="manager">Manager</option>
                            <option value="league">League</option>
                        </select>
                    </div>
                    <div className={styles.formSection}>
                        <label htmlFor="gender" className={styles.formLabel}>Gender</label>
                        <select id="gender" value={form.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="not_said">Prefer not to say</option>
                        </select>
                    </div>
                </div>

                <div className={styles.linkRow}>
                    <a href="/login">Already a member?</a>
                </div>

                <button type="submit" className={styles.signUpButton}>Become a member!</button>
            </form>

            <div className={styles.socialLogin}>
                <button className={styles.socialButton}><img src="https://img.icons8.com/color/20/google-logo.png" /> Sign in with Google</button>
                <button className={styles.socialButton}><img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png" /> Sign in with Facebook</button>
                <button className={styles.socialButton}><img src="https://img.icons8.com/ios-filled/20/mac-os.png" /> Sign in with Apple</button>
                <button className={styles.socialButton}><img src="https://img.icons8.com/ios-filled/20/000000/lock--v1.png" /> Sign in with SSO</button>
            </div>
        </div>
    );
};

export default Register;
