import React, { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import Button from '../components/Button'

const Certificates = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const certificateImages = [
    '/images/CertificatesThumbails/Bachelor certificate .png',
    '/images/CertificatesThumbails/Learn HTML and CSS Certificate.png',
    '/images/CertificatesThumbails/Learn JavaScript.png',
    '/images/CertificatesThumbails/Matthieu-Kapanga--Introduction-to-Python-Programming-for-Data-Science.png',
    '/images/CertificatesThumbails/responsive web design.png'
  ];

  // Auto-rotate certificates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === certificateImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [certificateImages.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? certificateImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === certificateImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Custom Button for CV download
  const CVButton = () => {
    return (
      <a 
        href="/images/MY ATS CV2.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cta-wrapper"
      >
        <div className="cta-button md:w-80 md:h-16 w-60 h-12 group">
          <div className='bg-circle'/>
          <p className='text'>View My CV</p>
          <div className='arrow-wrapper md:ml-4 flex items-center '>
            <img src='/images/arrow-right.svg' alt='arrow' className='w-4 h-4'/>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id='qualifications' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title="My Certificates & CV"
          sub="🎓 Qualifications & Achievements"
        />
        
        <div className='flex md:flex-row flex-col gap-10 mt-16'>
          {/* Left side - CV */}
          <div className='md:w-1/2 w-full flex flex-col items-center md:items-start gap-5 lg:mt-20'>
            <h3 className=' text-2xl font-semibold'>Professional Resume</h3>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Download my comprehensive CV to learn more about my education, skills, 
              and professional experience. I'm passionate about software development 
              and continuously expanding my knowledge in the field.
            </p>
            <CVButton />
          </div>
          
          {/* Right side - Certificate Slideshow */}
          <div className='md:w-1/2 w-full'>
            <div className='relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden'>
              {/* Certificate Image */}
              <img 
                src={certificateImages[currentImageIndex]} 
                alt={`Certificate ${currentImageIndex + 1}`} 
                className='w-full h-full object-contain'
              />
              
              {/* Navigation Controls */}
              <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-4'>
                <button 
                  onClick={goToPrevious}
                  className='bg-white/80 hover:bg-white p-2 rounded-full'
                >
                  <img 
                    src='/images/arrow-right.svg' 
                    alt='Previous' 
                    className='w-5 h-5 transform rotate-180' 
                  />
                </button>
                <div className='flex gap-1'>
                  {certificateImages.map((_, index) => (
                    <span 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={goToNext}
                  className='bg-white/80 hover:bg-white p-2 rounded-full'
                >
                  <img src='/images/arrow-right.svg' alt='Next' className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates