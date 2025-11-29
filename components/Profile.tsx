import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="flex justify-center items-start pt-4 animate-fade-in w-full">
            <div className="relative bg-tech-card w-full max-w-sm p-6 border border-tech-border rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)} 
                    className="absolute top-3 end-3 text-tech-muted hover:text-white bg-transparent border border-transparent hover:bg-white/10 rounded-lg p-1.5 focus:outline-none transition-colors" 
                    type="button"
                >
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/></svg>
                </button>
                
                {/* Dropdown menu */}
                {dropdownOpen && (
                    <div className="absolute top-12 right-3 z-20 bg-tech-bg border border-tech-border rounded-lg shadow-xl w-40 overflow-hidden ring-1 ring-black ring-opacity-5">
                        <ul className="py-1 text-sm text-tech-text">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-tech-primary/10 hover:text-tech-primary transition-colors">Edit</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-tech-primary/10 hover:text-tech-primary transition-colors">Export Data</a>
                            </li>
                            <li className="border-t border-tech-border">
                                <a href="#" className="block px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors">Delete Account</a>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-tech-tertiary flex items-center justify-center text-3xl text-white font-bold border-4 border-tech-bg shadow-lg shadow-tech-tertiary/50">
                        A
                    </div>
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-white">Alex Creative</h5>
                    <span className="text-sm text-tech-secondary font-medium">Digital Artist based in London</span>
                    
                    <div className="flex mt-6 gap-3 w-full">
                        <button type="button" className="flex-1 inline-flex justify-center items-center text-white bg-tech-primary border border-transparent hover:bg-white hover:text-tech-primary shadow-[0_0_10px_rgba(255,42,109,0.4)] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-all">
                            Edit Profile
                        </button>
                        <button type="button" className="flex-1 inline-flex justify-center items-center text-tech-muted bg-transparent border border-tech-border hover:border-tech-secondary hover:text-tech-secondary shadow-sm font-medium rounded-lg text-sm px-4 py-2 focus:outline-none transition-colors">
                            Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;