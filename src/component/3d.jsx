import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const GlobeAnimation = () => {
  const mount = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  let renderer = null;
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!mount.current) return;

    let scene, camera, particles, renderingParent, myTween;

    const init = () => {
      scene = new THREE.Scene();
      renderingParent = new THREE.Group();
      renderingParent.position.x = 200;

      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.5, 900);
      camera.position.z = 400;
      

      // Utilisation de la référence canvasRef pour attacher le canvas au DOM
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.current.appendChild(renderer.domElement);

      
      const distance = Math.min(200, window.innerWidth / 4);
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 1600; i++) {
        const vertex = new THREE.Vector3();

        const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
        const phi = THREE.MathUtils.randFloatSpread(360);

        vertex.x = distance * Math.sin(theta) * Math.cos(phi);
        vertex.y = distance * Math.sin(theta) * Math.sin(phi);
        vertex.z = distance * Math.cos(theta);

        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 387773, size: 2 }));

      renderingParent = new THREE.Group();
      renderingParent.add(particles);

      const resizeContainer = new THREE.Group();
      resizeContainer.add(renderingParent);
      scene.add(resizeContainer);

      animate();

      const animProps = { scale: 1 };
      gsap.to(animProps, {
        duration: 10,
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine',
        onUpdate: function () {
          renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
        },
      });

      const rotationProps = { xRot: 0, yRot: 0 };
      gsap.to(rotationProps, {
        duration: 120,
        xRot: Math.PI * 2,
        yRot: Math.PI * 4,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        onUpdate: function () {
          renderingParent.rotation.set(rotationProps.xRot, rotationProps.yRot, 0);
        },
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (renderingParent) {
        renderingParent.rotation.x += 0.005;
        renderingParent.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    const onMouseMove = (event) => {
      if (myTween) myTween.kill();

      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
      myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY.current * -1, y: mouseX.current });
    };

    init();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('mousemove', onMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', () => {});
      if (mount.current && renderer !== null && renderer.domElement !== null) {
        mount.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={mount}><canvas ref={canvasRef} /></div>;
};

export default GlobeAnimation;
