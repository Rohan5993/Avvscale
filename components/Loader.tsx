import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const Group = 'group' as any;
const AmbientLight = 'ambientLight' as any;
const SpotLight = 'spotLight' as any;
const PointLight = 'pointLight' as any;

const LiquidMetalLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Center>
          <Text
            font="https://fonts.gstatic.com/s/outfit/v11/Q_k79pfa6Uj4802W_m_8ySAn.woff"
            fontSize={5}
            color="#180A5C"
            letterSpacing={-0.05}
          >
            AS
            <MeshDistortMaterial
              color="#180A5C"
              speed={4}
              distort={0.4}
              metalness={1}
              roughness={0.1}
            />
          </Text>
        </Center>
      </Float>
    </Group>
  );
};

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="w-full h-2/3">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <AmbientLight intensity={0.5} />
          <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#180A5C" />
          <PointLight position={[-10, -10, -10]} intensity={0.5} />
          <LiquidMetalLogo />
        </Canvas>
      </div>
      
      <div className="mt-8 text-center px-6">
        <h1 className="text-3xl font-bold text-[#0D0339] tracking-tight mb-2 uppercase">
          AVVSCALE
        </h1>
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-[#180A5C] animate-[loading_3s_linear_forwards]" />
        </div>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Calibrating Growth Engine...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};