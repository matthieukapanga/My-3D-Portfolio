import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import * as THREE from 'three';

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const controlsRef = useRef();
    
    // Disable touch zoom on mobile
    useEffect(() => {
        if (isMobile) {
            // Disable any touch events that might cause zooming
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.addEventListener('touchmove', (e) => {
                    if (e.touches.length > 1) {
                        e.preventDefault();
                    }
                }, { passive: false });
            }
        }
    }, [isMobile]);
    
    return (
        <Canvas camera={{position: [0, 0, 15], fov: 45}}> 
            <ambientLight intensity={0.2} color="#1a1a40" />
            <OrbitControls 
                ref={controlsRef}
                enablePan={false}
                enableZoom={false}
                enableDamping={true}
                dampingFactor={0.1}
                rotateSpeed={0.5}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI/5}
                maxPolarAngle={Math.PI/2}
                touches={{ ONE: THREE.TOUCH.ROTATE, TWO: undefined, THREE: undefined }}
            />

            <Suspense fallback={null}>
                <HeroLights/>
                <group 
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room/>
                </group>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;