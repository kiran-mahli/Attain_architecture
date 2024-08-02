import React from 'react';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">DEMMOO</h1>
                    <nav>
                        <a href="#home" className="mx-2 hover:text-gray-200">Home</a>
                        <a href="#about" className="mx-2 hover:text-gray-200">About Us</a>
                        <a href="#services" className="mx-2 hover:text-gray-200">Services</a>
                        <a href="#team" className="mx-2 hover:text-gray-200">Team</a>
                        <a href="#testimonials" className="mx-2 hover:text-gray-200">Testimonials</a>
                        <a href="#blog" className="mx-2 hover:text-gray-200">Blog</a>
                        <a href="#contact" className="mx-2 hover:text-gray-200">Contact</a>
                    </nav>
                </div>
            </header>
            <main>
                <section id="home" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Grow Your Business With Digital Marketing</h2>
                    <p className="mb-4">Start your digital marketing journey with us and see the difference.</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
                </section>
                <section id="about" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Start Business With Us</h2>
                    <p className="mb-4">Over 2 years of experience, we help businesses reach their financial and branding goals.</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">About Us</button>
                </section>
                <section id="services" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get Benefits & Advantages From Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Digital Analytics</h3>
                            <p>Understanding your audience through data analytics.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Content Marketing</h3>
                            <p>Creating valuable content to attract customers.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Social Marketing</h3>
                            <p>Using social media to reach your audience.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Target Advertising</h3>
                            <p>Reaching the right audience with targeted ads.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
                            <p>Communicating effectively through email campaigns.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Page Ranking</h3>
                            <p>Improving your search engine rankings.</p>
                        </div>
                    </div>
                </section>
                <section id="team" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <img src="/path/to/image" alt="Leader" className="mb-4 rounded-full mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Jason Smith</h3>
                            <p>CEO</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <img src="/path/to/image" alt="Leader" className="mb-4 rounded-full mx-auto" />
                            <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
                            <p>Marketing Head</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <img src="/path/to/image" alt="Leader" className="mb-4 rounded-full mx-auto" />
                            <h3 className="text-xl font-bold mb-2">John Smith</h3>
                            <p>Sales Lead</p>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">What They Say About Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p>"Great service and support!"</p>
                            <p className="mt-2 font-bold">- Customer Name</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p>"Helped our business grow significantly."</p>
                            <p className="mt-2 font-bold">- Customer Name</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <p>"Highly recommend their services."</p>
                            <p className="mt-2 font-bold">- Customer Name</p>
                        </div>
                    </div>
                </section>
                <section id="blog" className="container mx-auto py-10 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Latest Media</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                            <p>Brief description of the blog post.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                            <p>Brief description of the blog post.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                            <p>Brief description of the blog post.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 DEMMOO. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
