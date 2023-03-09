import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// const PortalGun = ({ mouse }) => {
//   const computer = useGLTF("./portal_gun/scene.gltf");
//   const pRef = useRef();
//   // if(pRef.current) {
//   //   console.log(pRef.current.rotation)
//   // }
//   return (
//     <mesh rotation={[0, 1.3, 0]}>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={0.5} />
//       <spotLight
//         position={[0, 20, 10]}
//         angle={1}
//         penubra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />

//       <primitive
//         object={computer.scene}
//         scale={0.03}
//         position={[0, -3, 0]}
//         ref={pRef}
//         rotation={[
//           -(mouse.y / window.innerHeight) + 0.5,
//           -(mouse.x / window.innerWidth) + 0.5,
//           0,
//         ]}
//       />
//     </mesh>
//   );
// };
const PortalGun = ({ mouse }) => {
  const computer = useGLTF("./portal_gun/scene.gltf");
  const pRef = useRef();
  // if(pRef.current) {
  //   console.log(pRef.current.rotation)
  // }
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight
        position={[0, 20, 10]}
        angle={1}
        penubra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.05}
        position={[0, -8, 0]}
        ref={pRef}
        rotation={[
          -(mouse.y / window.innerHeight) + 0.5,
          -(mouse.x / window.innerWidth) + 0.5,
          0,
        ]}
      />
    </mesh>
  );
};
const Bullet = () => {
  return (
    <mesh
      visible={true}
      position={[-0, -10, -10]}
    >
      <sphereBufferGeometry attach="geometry" />
      <meshPhysicalMaterial
        color={"red"}
        emissive={"blue"}
        metalness={0.8}
        reflectivity={0.5}
      />
    </mesh>
  );
};

const PortalGunCanvas = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 20, 30], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onMouseMove={handleMouseMove}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <PortalGun mouse={mouse} />
        <Bullet />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PortalGunCanvas;
