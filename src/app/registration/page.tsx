'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        contact: '',
        address: '',
        gender: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/register/', formData);
            alert(res.data.message);
            router.push('/');
        } catch (err: any) {
            alert(JSON.stringify(err.response?.data || 'Registration failed'));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white min-h-screen pt-28 px-4">
            <header className="w-full bg-white shadow-md p-5 flex justify-between items-center fixed top-0 z-10">
                <h2 className="text-2xl font-bold text-gray-800">🎉 EventHub</h2>
                <nav className="flex gap-6 text-base">
                <Link href="/" className="text-gray-700 font-medium hover:text-purple-700 transition">Home</Link>
                <Link href="#" className="text-gray-700 font-medium hover:text-purple-700 transition">Jobs</Link>
                <Link href="#" className="text-gray-700 font-medium hover:text-purple-700 transition">About</Link>
                </nav>
            </header>

            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-4xl text-gray-800 mt-6">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700">Create Your Event Account</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input name="first_name" placeholder="First Name" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="middle_name" placeholder="Middle Name" onChange={handleChange} className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="last_name" placeholder="Last Name" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="username" placeholder="Username" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="contact" placeholder="Contact" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="address" placeholder="Address" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="gender" placeholder="Gender" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    <input name="confirm_password" type="password" placeholder="Confirm Password" onChange={handleChange} required className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    
                    <div className="md:col-span-2">
                        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">Register</button>
                    </div>
                </form>
                <p className="text-center mt-6 text-sm">
                    Already have an account?{' '}
                    <span onClick={() => router.push('/login')} className="text-purple-600 font-semibold cursor-pointer hover:underline">
                        Login here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
