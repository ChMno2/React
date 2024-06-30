import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 引入 useTranslation

function RegisterPage() {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [otpMethod, setOtpMethod] = useState('LINE Notify');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // 處理註冊邏輯，例如發送請求到後端
        console.log('註冊信息:', { username, password, userInfo, otpMethod });
    };

    const handleBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className="register-page">
            <h2>{t('Register Page')}</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>{t('Account')}:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>{t('Password')}:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>{t('User Info')}:</label>
                    <input 
                        type="text" 
                        value={userInfo} 
                        onChange={(e) => setUserInfo(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>{t('OTP Method')}:</label>
                    <select 
                        value={otpMethod} 
                        onChange={(e) => setOtpMethod(e.target.value)} 
                        required
                    >
                        <option value="LINE Notify">{t('LINE Notify')}</option>
                        {/* 可在此添加更多OTP發送方式 */}
                    </select>
                </div>
                <button type="submit">{t('Register')}</button>
            </form>
            <button onClick={handleBackToLogin}>{t('Back to Login')}</button>
            <p>{t('Have an account?')} <Link to="/">{t('Login')}</Link></p>
        </div>
    );
}

export default RegisterPage;
