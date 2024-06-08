import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Contact Information */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">1234 Street Name</p>
          <p className="mb-2">City, State, 12345</p>
          <p className="mb-2">Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.735 0-1.325.59-1.325 1.325v21.351c0 .735.59 1.324 1.325 1.324h11.495v-9.309h-3.13v-3.63h3.13v-2.67c0-3.1 1.894-4.786 4.66-4.786 1.324 0 2.464.098 2.795.142v3.24h-1.917c-1.506 0-1.797.716-1.797 1.764v2.31h3.588l-.467 3.63h-3.121v9.309h6.117c.735 0 1.325-.589 1.325-1.324v-21.351c0-.735-.59-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.556c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.566-2.005.978-3.127 1.2-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.573-.666 2.476 0 1.709.87 3.216 2.188 4.1-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.696 4.374 3.946 4.827-.413.113-.848.173-1.296.173-.317 0-.625-.031-.926-.089.626 1.953 2.444 3.377 4.6 3.417-1.68 1.317-3.808 2.104-6.114 2.104-.397 0-.788-.023-1.176-.068 2.18 1.397 4.768 2.212 7.548 2.212 9.053 0 14-7.496 14-13.986 0-.213-.005-.425-.014-.637.962-.694 1.8-1.56 2.462-2.549z"/></svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12 0-6.627 5.373-12 12-12zm0 3.695c-4.591 0-8.31 3.72-8.31 8.31 0 1.947.696 3.735 1.857 5.134.793.973 1.867 1.686 3.06 2.096-.034-.173-.055-.354-.055-.539 0-1.011.799-1.83 1.787-1.83.984 0 1.787.819 1.787 1.83 0 .188-.023.368-.057.54 1.195-.411 2.267-1.125 3.057-2.095 1.162-1.4 1.858-3.188 1.858-5.136 0-4.589-3.72-8.31-8.31-8.31zm0 4.853c.767 0 1.388.621 1.388 1.388 0 .767-.621 1.388-1.388 1.388s-1.388-.621-1.388-1.388c0-.767.621-1.388 1.388-1.388zm-4.603-.439c.707 0 1.28.573 1.28 1.28s-.573 1.28-1.28 1.28-1.28-.573-1.28-1.28.573-1.28 1.28-1.28z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
