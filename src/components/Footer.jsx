import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            HobbyHub
          </p>
        </aside>
      </footer>
    </div>
  );
}
