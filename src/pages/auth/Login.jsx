import React from 'react';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-2">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-orange-6 text-white py-2 px-4 rounded-md hover:bg-orange-7">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
