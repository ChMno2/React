import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!recaptchaValue) {
            setError(t('Please complete the reCAPTCHA'));
            return;
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, otp, recaptchaValue })
        });

        const result = await response.json();
        if (response.ok) {
            // 成功處理邏輯
            console.log('Login successful:', result);
        } else {
            // 錯誤處理邏輯
            setError(result.message);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>{t('Login Page')}</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder={t('Username')} 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder={t('Password')} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder={t('OTP')} 
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required 
                    />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />{t('Remember me')}</label>
                    <a href="#">{t('Forgot password?')}</a>
                </div>

                <ReCAPTCHA
                    sitekey="6LfoNgMqAAAAADUzR8ctb4AaA-KDuSlu-QTvzLwm"
                    onChange={(value) => setRecaptchaValue(value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">{t('Login')}</button>
                <div className="register-link">
                    <p>{t("Don't have an account?")} <Link to="/RegisterForm">{t('Register')}</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
