// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Login Page': 'Login Page',
        'Username': 'Username',
        'Password': 'Password',
        'OTP': 'OTP',
        'Remember me': 'Remember me',
        'Forgot password?': 'Forgot password?',
        'Please complete the reCAPTCHA': 'Please complete the reCAPTCHA',
        'Login': 'Login',
        'Don\'t have an account?': 'Don\'t have an account?',
        'Register': 'Register',
        'Register Page': 'Register Page',
        'Account': 'Account',
        'User Info': 'User Info',
        'OTP Method': 'OTP Method',
        'LINE Notify': 'LINE Notify',
        'Back to Login': 'Back to Login',
        'Have an account?': 'Have an account?',
        'Loading weather data...': 'Loading weather data...',
        'Unable to fetch weather information': 'Unable to fetch weather information',
        'Yunlin County Weather Information': 'Yunlin County Weather Information',
      },
    },
    zh: {
      translation: {
        'Login Page': '登入頁面',
        'Username': '用戶名',
        'Password': '密碼',
        'OTP': '一次性密碼',
        'Remember me': '記住我',
        'Forgot password?': '忘記密碼？',
        'Please complete the reCAPTCHA': '請完成reCAPTCHA驗證',
        'Login': '登錄',
        'Don\'t have an account?': '沒有帳號？',
        'Register': '註冊',
        'Register Page': '註冊頁',
        'Account': '帳號',
        'User Info': '使用者資訊',
        'OTP Method': 'OTP發送方式',
        'LINE Notify': 'LINE Notify',
        'Back to Login': '返回登入',
        'Have an account?': '已有帳號？',
        'Loading weather data...': '正在加載氣象資訊...',
        'Unable to fetch weather information': '無法獲取氣象資訊',
        'Yunlin County Weather Information': '雲林縣氣象資訊',
      },
    },
  },
  lng: 'zh', // 默認语言
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
