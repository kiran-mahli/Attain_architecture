import React from 'react';


import './App.css';
import Home from './Pages/Home';

 function App ()  {



    return (
<div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        
          <h1 className="text-3xl font-bold text-gray-900">Attain Architecture</h1>
          <nav>
            <a href="#home" className="text-gray-700 hover:text-gray-900 mx-2">Home</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 mx-2">Services</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 mx-2">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 mx-2">Contact</a>
          </nav>
        </div>
      </header>
      <main>
      
      <section id="home" className="container mx-auto py-10 px-4">
      
          <h2 className="text-2xl font-bold mb-6">Welcome to Attain Architecture</h2>
          <p className="mb-4">Govt. Approved</p>
          <p className="mb-4">Specialist in Residential, Commercial, Apartments, Industrial & Farm House</p>
          <p className="mb-4">Services: Submission Drawings, Structural Drawings, Exterior Drawings, Interior Drawings, 3D Views, Construction with Materials & Property also</p>
        </section>
        <section id="services" className="container mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <ul className="list-disc list-inside">
            <li>Submission Drawings</li>
            <li>Structural Drawings</li>
            <li>Exterior Drawings</li>
            <li>Interior Drawings</li>
            <li>3D Views</li>
            <li>Construction with Materials & Property also</li>
          </ul>
        </section>
        <section id="about" className="container mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>
          <p>We are a Govt. approved architectural firm specializing in various types of buildings including residential, commercial, apartments, industrial, and farmhouses. Our expert team provides comprehensive services from submission drawings to construction with materials and property.</p>
        </section>
        <section id="contact" className="container mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p>Email: attainarchitecturefirm@gmail.com</p>
          <p>Phone: 9915144110</p>
          <p>Address: CHD, HRY, GAMADA, ZIRAKPUR</p>
        </section>
      </main>
      <footer className="bg-white shadow">
        <div className="container mx-auto py-6 px-4">
          <p className="text-gray-600">&copy; 2024 Attain Architecture. All rights reserved.</p>
        </div>
      </footer>
      </div>





        
           
    );
}

export default App;


