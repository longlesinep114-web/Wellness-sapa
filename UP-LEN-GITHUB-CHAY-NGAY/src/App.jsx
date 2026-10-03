import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import DriveMenuModal from './components/DriveMenuModal';
import VideoTourModal from './components/VideoTourModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Simple, rock-solid client-side routing using state & window.location.hash
  const getInitialRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    return hash || 'trang-chu';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState(null);
  const [driveMenuModalOpen, setDriveMenuModalOpen] = useState(false);
  const [videoTourModalOpen, setVideoTourModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      setCurrentRoute(hash || 'trang-chu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId = null) => {
    setBookingServiceId(serviceId);
    setBookingModalOpen(true);
  };

  // Route resolver
  const renderCurrentPage = () => {
    if (currentRoute === 'trang-chu' || currentRoute === '') {
      return (
        <HomePage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
          onOpenVideoTour={() => setVideoTourModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'gioi-thieu') {
      return (
        <AboutPage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
          onOpenVideoTour={() => setVideoTourModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'dich-vu') {
      return (
        <ServicesPage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
        />
      );
    }

    if (currentRoute.startsWith('dich-vu?q=')) {
      const query = decodeURIComponent(currentRoute.split('?q=')[1] || '');
      return (
        <ServicesPage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
          initialQuery={query}
        />
      );
    }

    if (currentRoute.startsWith('dich-vu/')) {
      const serviceId = currentRoute.replace('dich-vu/', '');
      return (
        <ServiceDetailPage 
          serviceId={serviceId} 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking(serviceId)}
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'bang-gia') {
      return (
        <PricingPage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
          onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
        />
      );
    }

    if (currentRoute === 'danh-gia') {
      return (
        <ReviewsPage 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    if (currentRoute === 'tin-tuc') {
      return (
        <NewsPage 
          navigateTo={navigateTo} 
        />
      );
    }

    if (currentRoute.startsWith('tin-tuc/')) {
      const slug = currentRoute.replace('tin-tuc/', '');
      return (
        <NewsDetailPage 
          slug={slug} 
          navigateTo={navigateTo} 
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    if (currentRoute === 'lien-he') {
      return (
        <ContactPage 
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    // Default fallback to HomePage
    return (
      <HomePage 
        navigateTo={navigateTo} 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
        onOpenVideoTour={() => setVideoTourModalOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#222222]">
      {/* Top Navbar */}
      <Navbar 
        currentRoute={currentRoute} 
        navigateTo={navigateTo} 
        onOpenBooking={() => handleOpenBooking()}
        onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        navigateTo={navigateTo} 
        onOpenBooking={() => handleOpenBooking()}
        onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
      />

      {/* Floating Action Buttons & Mobile Bottom Navigation */}
      <FloatingActions 
        currentRoute={currentRoute}
        navigateTo={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDriveMenu={() => setDriveMenuModalOpen(true)}
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        preselectedServiceId={bookingServiceId}
      />

      {/* Google Drive Menu Modal */}
      <DriveMenuModal 
        isOpen={driveMenuModalOpen} 
        onClose={() => setDriveMenuModalOpen(false)} 
      />

      {/* Video Tour Modal */}
      <VideoTourModal 
        isOpen={videoTourModalOpen} 
        onClose={() => setVideoTourModalOpen(false)} 
      />
    </div>
  );
}
