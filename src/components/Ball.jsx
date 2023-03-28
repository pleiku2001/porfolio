import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { motion } from "framer-motion";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={props.color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal position={[1, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 1, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, -1, 0]} scale={1} map={decal} flatShading />
        <Decal position={[-1, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 0, -1]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, color, index }) => {
  return (
    <motion.div
      animate={{
        y: [
          10 + index * 2,
          5 + index * 2,
          0 + index * 2,
          5 + index * 2,
          10 + index * 2,
        ],
        x: [
          -10 + index * 2,
          -5 + index * 2,
          0 + index * 2,
          -5 + index * 2,
          -10 + index * 2,
        ],
      }}
      transition={{
        ease: "linear",
        duration: 4,
        repeat: Infinity,
      }}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} autoRotate enableDamping={false} />
        <Ball imgUrl={icon} color={color} />

        <Preload all />
      </Canvas>
    </motion.div>
  );
};

export default BallCanvas;
