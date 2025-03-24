import express from "express";
import { createServer } from "http";
// import { storage } from "./storage";

export async function registerRoutes(app){
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate inputs
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // In a real app, you might save this to a database or send an email
      // For now, we'll just respond with success
      
      // Return success response
      res.status(200).json({ 
        message: 'Message received successfully',
        data: { name, email, subject, message }
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Server error processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
