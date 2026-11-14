import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinematicCanvasProps {
  currentChapter: number; // 0: Hero, 1: Think, 2: Connect, 3: Automate, 4: Create, 5: Swarm
  scrollProgress: number; // 0 to 1 overall progress
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({ currentChapter, scrollProgress }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ currentChapter, scrollProgress, mouseX: 0, mouseY: 0 });

  useEffect(() => {
    stateRef.current.currentChapter = currentChapter;
    stateRef.current.scrollProgress = scrollProgress;
  }, [currentChapter, scrollProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030305, 0.025);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // ==========================================
    // 1. LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0x0a1020, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00f0ff, 4, 50);
    blueLight.position.set(12, 10, 12);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xd4af37, 4, 50);
    goldLight.position.set(-12, -8, 10);
    scene.add(goldLight);

    const coreLight = new THREE.PointLight(0x00f0ff, 6, 25);
    scene.add(coreLight);

    // ==========================================
    // 2. HERO: GLOWING AI CORE
    // ==========================================
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(2.4, 4);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x051025,
      emissive: 0x00d4ff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Geodesic wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(innerGeo, wireMat);
    wireMesh.scale.setScalar(1.02);
    coreGroup.add(wireMesh);

    // Orbiting Gimbal Rings (Metallic Gold & Electric Blue)
    const ringMatGold = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x4a3c10,
      emissiveIntensity: 0.3,
    });
    const ringMatBlue = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x003355,
      emissiveIntensity: 0.5,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.045, 16, 100), ringMatGold);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.3, 0.04, 16, 100), ringMatBlue);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(5.0, 0.035, 16, 100), ringMatGold);
    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring1, ring2, ring3);

    // Floating digital voxels/fragments around core
    const fragmentCount = 45;
    const fragmentGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const fragmentMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x221800,
    });
    const fragments: { mesh: THREE.Mesh; speed: number; orbitRadius: number; angle: number; yOffset: number }[] = [];
    for (let i = 0; i < fragmentCount; i++) {
      const mesh = new THREE.Mesh(fragmentGeo, fragmentMat);
      const orbitRadius = 4.2 + Math.random() * 3.5;
      const angle = Math.random() * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 4;
      mesh.position.set(Math.cos(angle) * orbitRadius, yOffset, Math.sin(angle) * orbitRadius);
      coreGroup.add(mesh);
      fragments.push({ mesh, speed: 0.008 + Math.random() * 0.015, orbitRadius, angle, yOffset });
    }

    // ==========================================
    // 3. CHAPTER 1: DUAL-HEMISPHERE BRAIN PARTICLES (THINK)
    // ==========================================
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);
    brainGroup.visible = false;

    const brainParticleCount = 2200;
    const brainGeo = new THREE.BufferGeometry();
    const brainPositions = new Float32Array(brainParticleCount * 3);
    const brainColors = new Float32Array(brainParticleCount * 3);

    const goldColor = new THREE.Color(0xd4af37);
    const blueColor = new THREE.Color(0x00f0ff);

    for (let i = 0; i < brainParticleCount; i++) {
      // Shape particles into two ellipsoidal lobes
      const hemisphere = i % 2 === 0 ? 1 : -1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 3.2;

      const x = r * Math.sin(phi) * Math.cos(theta) * 0.8 + hemisphere * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.9 + Math.sin(x * 2) * 0.4;
      const z = r * Math.cos(phi) * 1.1;

      brainPositions[i * 3] = x;
      brainPositions[i * 3 + 1] = y;
      brainPositions[i * 3 + 2] = z;

      const c = Math.random() > 0.4 ? blueColor : goldColor;
      brainColors[i * 3] = c.r;
      brainColors[i * 3 + 1] = c.g;
      brainColors[i * 3 + 2] = c.b;
    }

    brainGeo.setAttribute('position', new THREE.BufferAttribute(brainPositions, 3));
    brainGeo.setAttribute('color', new THREE.BufferAttribute(brainColors, 3));

    const brainPointsMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const brainParticles = new THREE.Points(brainGeo, brainPointsMat);
    brainGroup.add(brainParticles);

    // Synaptic connections (Lines between close brain nodes)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const linePositions: number[] = [];
    for (let i = 0; i < 350; i += 2) {
      linePositions.push(
        brainPositions[i * 3], brainPositions[i * 3 + 1], brainPositions[i * 3 + 2],
        brainPositions[(i + 1) * 3], brainPositions[(i + 1) * 3 + 1], brainPositions[(i + 1) * 3 + 2]
      );
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const brainLines = new THREE.LineSegments(lineGeo, lineMat);
    brainGroup.add(brainLines);

    // ==========================================
    // 4. CHAPTER 2: CONNECTED APP CONSTELLATION (CONNECT)
    // ==========================================
    const connectGroup = new THREE.Group();
    scene.add(connectGroup);
    connectGroup.visible = false;

    // Central Agent Core Node
    const hubMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x0077aa, roughness: 0.1, metalness: 0.9 })
    );
    connectGroup.add(hubMesh);

    // 6 Orbital Application Nodes
    const appNames = ['Gmail', 'Google Sheets', 'APIs', 'Websites', 'Databases', 'Enterprise ERP'];
    const appNodes: THREE.Mesh[] = [];
    const appRays: THREE.Line[] = [];
    const rayPoints = 6;

    for (let i = 0; i < rayPoints; i++) {
      const angle = (i / rayPoints) * Math.PI * 2;
      const radius = 6.2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.65);
      const z = (Math.sin(angle * 2) * 1.5);

      const nodeMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.9, 0.9),
        new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0xd4af37 : 0x00f0ff,
          metalness: 0.8,
          roughness: 0.2,
          emissive: i % 2 === 0 ? 0x443300 : 0x003366,
        })
      );
      nodeMesh.position.set(x, y, z);
      connectGroup.add(nodeMesh);
      appNodes.push(nodeMesh);

      // Connecting energy curve
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x * 0.5, y * 0.5 + 1.2, z * 0.5),
        new THREE.Vector3(x, y, z)
      );
      const points = curve.getPoints(24);
      const rayGeo = new THREE.BufferGeometry().setFromPoints(points);
      const rayLine = new THREE.Line(
        rayGeo,
        new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? 0xd4af37 : 0x00f0ff,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
        })
      );
      connectGroup.add(rayLine);
      appRays.push(rayLine);
    }

    // ==========================================
    // 5. CHAPTER 3: 3D WORKFLOW PIPELINE (AUTOMATE)
    // ==========================================
    const pipelineGroup = new THREE.Group();
    scene.add(pipelineGroup);
    pipelineGroup.visible = false;

    // Pipeline steps arranged along an S-curve
    const pipelineNodesCount = 5;
    for (let i = 0; i < pipelineNodesCount; i++) {
      const x = (i - 2) * 3.4;
      const y = Math.sin(i * 1.2) * 1.6;
      const z = Math.cos(i * 1.2) * 1.2;

      const pNode = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 0.35, 16),
        new THREE.MeshStandardMaterial({
          color: 0x111625,
          emissive: i === 2 ? 0xd4af37 : 0x00f0ff,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.15,
        })
      );
      pNode.rotation.x = Math.PI / 2;
      pNode.position.set(x, y, z);
      pipelineGroup.add(pNode);

      // Connecting cylinder conduits
      if (i > 0) {
        const prevX = (i - 1 - 2) * 3.4;
        const prevY = Math.sin((i - 1) * 1.2) * 1.6;
        const prevZ = Math.cos((i - 1) * 1.2) * 1.2;

        const conduitGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(prevX, prevY, prevZ),
          new THREE.Vector3(x, y, z),
        ]);
        const conduit = new THREE.Line(
          conduitGeo,
          new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 })
        );
        pipelineGroup.add(conduit);
      }
    }

    // ==========================================
    // 6. CHAPTER 4: CREATIVE PRISM MATRIX (CREATE)
    // ==========================================
    const createGroup = new THREE.Group();
    scene.add(createGroup);
    createGroup.visible = false;

    const prismCount = 12;
    const prismGeo = new THREE.OctahedronGeometry(1.2, 0);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x051b2b,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 1.5,
      transparent: true,
      opacity: 0.75,
    });
    for (let i = 0; i < prismCount; i++) {
      const mesh = new THREE.Mesh(prismGeo, prismMat);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 6
      );
      mesh.scale.setScalar(0.6 + Math.random() * 0.7);
      createGroup.add(mesh);
    }

    // ==========================================
    // 7. CHAPTER 5: AGENT SWARM (AGENTIC FUTURE)
    // ==========================================
    const swarmGroup = new THREE.Group();
    scene.add(swarmGroup);
    swarmGroup.visible = false;

    // 5 Autonomous Agent Spheres in orbital harmony
    const swarmAgents: THREE.Mesh[] = [];
    const agentRoles = ['Research', 'Marketing', 'Automation', 'Content', 'BI Intelligence'];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const radius = 5.5;
      const mesh = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.0, 1),
        new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0xd4af37 : 0x00f0ff,
          emissive: i % 2 === 0 ? 0x664400 : 0x004488,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.1,
        })
      );
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.5, Math.sin(angle * 2) * 1.5);
      swarmGroup.add(mesh);
      swarmAgents.push(mesh);
    }

    // Swarm inter-agent communication lines
    const swarmLineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const swarmLinesGeo = new THREE.BufferGeometry();
    const swarmLineIndices = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3], [2, 4]
    ];
    const swarmPoints: number[] = [];
    swarmLineIndices.forEach(([a, b]) => {
      swarmPoints.push(
        swarmAgents[a].position.x, swarmAgents[a].position.y, swarmAgents[a].position.z,
        swarmAgents[b].position.x, swarmAgents[b].position.y, swarmAgents[b].position.z
      );
    });
    swarmLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(swarmPoints, 3));
    const swarmMeshLines = new THREE.LineSegments(swarmLinesGeo, swarmLineMat);
    swarmGroup.add(swarmMeshLines);

    // ==========================================
    // 8. GLOBAL AMBIENT STAR/PARTICLE NEBULA (3500 particles)
    // ==========================================
    const globalCount = 3500;
    const globalGeo = new THREE.BufferGeometry();
    const globalPositions = new Float32Array(globalCount * 3);
    const globalColors = new Float32Array(globalCount * 3);

    for (let i = 0; i < globalCount; i++) {
      globalPositions[i * 3] = (Math.random() - 0.5) * 60;
      globalPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      globalPositions[i * 3 + 2] = (Math.random() - 0.5) * 45;

      const c = Math.random() > 0.65 ? goldColor : blueColor;
      globalColors[i * 3] = c.r;
      globalColors[i * 3 + 1] = c.g;
      globalColors[i * 3 + 2] = c.b;
    }

    globalGeo.setAttribute('position', new THREE.BufferAttribute(globalPositions, 3));
    globalGeo.setAttribute('color', new THREE.BufferAttribute(globalColors, 3));

    const globalParticles = new THREE.Points(
      globalGeo,
      new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(globalParticles);

    // ==========================================
    // 9. MOUSE & POINTER INTERACTION
    // ==========================================
    const handleMouseMove = (e: MouseEvent) => {
      stateRef.current.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      stateRef.current.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // 10. ANIMATION RENDER LOOP
    // ==========================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const { currentChapter, mouseX, mouseY, scrollProgress } = stateRef.current;

      // Mouse parallax smooth lerp
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 1.2 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Core rotation
      coreGroup.rotation.y = elapsedTime * 0.35 + scrollProgress * Math.PI;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15;
      ring1.rotation.x = elapsedTime * 0.45;
      ring1.rotation.y = elapsedTime * 0.3;
      ring2.rotation.y = -elapsedTime * 0.55;
      ring2.rotation.z = elapsedTime * 0.25;
      ring3.rotation.z = elapsedTime * 0.35;

      // Orbiting fragments
      fragments.forEach((frag) => {
        frag.angle += frag.speed;
        frag.mesh.position.x = Math.cos(frag.angle) * frag.orbitRadius;
        frag.mesh.position.z = Math.sin(frag.angle) * frag.orbitRadius;
        frag.mesh.position.y = frag.yOffset + Math.sin(elapsedTime * 2 + frag.angle) * 0.4;
        frag.mesh.rotation.x += 0.02;
        frag.mesh.rotation.y += 0.03;
      });

      // Chapter-specific visibility & smooth transitions
      // Chapter 0: Hero
      coreGroup.visible = currentChapter === 0;
      if (coreGroup.visible) {
        coreGroup.scale.setScalar(THREE.MathUtils.lerp(coreGroup.scale.x, 1.0, 0.1));
      }

      // Chapter 1: Think (Brain)
      brainGroup.visible = currentChapter === 1;
      if (brainGroup.visible) {
        brainGroup.rotation.y = elapsedTime * 0.25;
        brainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1;
      }

      // Chapter 2: Connect
      connectGroup.visible = currentChapter === 2;
      if (connectGroup.visible) {
        connectGroup.rotation.y = elapsedTime * 0.18;
        appNodes.forEach((node, i) => {
          node.rotation.x = elapsedTime * 0.8 + i;
          node.rotation.y = elapsedTime * 0.6 + i;
        });
      }

      // Chapter 3: Automate
      pipelineGroup.visible = currentChapter === 3;
      if (pipelineGroup.visible) {
        pipelineGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.2;
        pipelineGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.25;
      }

      // Chapter 4: Create
      createGroup.visible = currentChapter === 4;
      if (createGroup.visible) {
        createGroup.rotation.y = elapsedTime * 0.15;
        createGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;
      }

      // Chapter 5: Agentic Future
      swarmGroup.visible = currentChapter === 5;
      if (swarmGroup.visible) {
        swarmGroup.rotation.y = elapsedTime * 0.2;
        swarmAgents.forEach((agent, i) => {
          agent.rotation.y = elapsedTime * 1.2 + i;
          agent.position.y = Math.sin(elapsedTime * 1.5 + i * 1.2) * 2;
        });
      }

      // Global particle drift
      globalParticles.rotation.y = elapsedTime * 0.03;
      globalParticles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #080a14 0%, #030305 100%)' }}
    />
  );
};
