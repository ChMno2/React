import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 引入useNavigate

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [otpMethod, setOtpMethod] = useState('LINE Notify');
    const navigate = useNavigate(); // 使用useNavigate hook

    const handleRegister = (e) => {
        e.preventDefault();
        // 處理註冊邏輯，例如發送請求到後端
        console.log('註冊信息:', { username, password, userInfo, otpMethod });
    };

    const handleBackToLogin = () => {
        navigate('/'); // 導航到登入頁面
    };

    return (
        <div className="register-page">
            <h2>註冊頁</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>帳號:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>密碼:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>使用者資訊:</label>
                    <input type="text" value={userInfo} onChange={(e) => setUserInfo(e.target.value)} required />
                </div>
                <div>
                    <label>OTP發送方式:</label>
                    <select value={otpMethod} onChange={(e) => setOtpMethod(e.target.value)} required>
                        <option value="LINE Notify">LINE Notify</option>
                        {/* 可在此添加更多OTP發送方式 */}
                    </select>
                </div>
                <button type="submit">註冊</button>
            </form>
            <button onClick={handleBackToLogin}>返回登入</button>
            <p>Have an account? <Link to="/">Login</Link></p> {/* 使用Link進行導航 */}
        </div>
    );
}

export default RegisterPage;
