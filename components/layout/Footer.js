import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Portfolio</h3>
            <p className="text-muted-foreground max-w-xs">
              Creating digital experiences with attention to detail and a focus on user experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/saketh-05" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/saketh-surya-dontukurti-6b9776291/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/Saketh_D_Surya" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:dsakethsurya@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; {currentYear} Portfolio. All rights reserved. 😁</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}