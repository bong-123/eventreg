'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login/', formData);
            alert(res.data.message);
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
            router.push('/');
        } catch (err: any) {
            alert(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 text-white min-h-screen relative pt-28 px-4">
            <header className="w-full bg-white shadow-md p-5 flex justify-between items-center fixed top-0 z-10">
                <h2 className="text-2xl font-bold text-gray-800">🎉 EventHub</h2>
                <nav className="flex gap-6 text-base">
                    <a href="/" className="text-gray-700 font-medium hover:text-purple-700 transition">Home</a>
                    <a href="#" className="text-gray-700 font-medium hover:text-purple-700 transition">Jobs</a>
                    <a href="#" className="text-gray-700 font-medium hover:text-purple-700 transition">About</a>
                </nav>
            </header>

            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md text-gray-800 mt-6">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">Login to Your Event Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-5 text-sm">
                    Don&apos;t have an account?{' '}
                    <span
                        onClick={() => router.push('/registration')}
                        className="text-purple-600 font-semibold cursor-pointer hover:underline"
                    >
                        Register here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
