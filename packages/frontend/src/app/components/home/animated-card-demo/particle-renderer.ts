import { IParticle, ParticleType } from './particle.model';
import * as Constants from './constants';

interface ResonanceNode {
  x: number;
  y: number;
  strength: number;
  type: string;
}

interface EnergyCascade {
  source: IParticle;
  targets: IParticle[];
  strength: number;
}

interface StandingWave {
  particles: IParticle[];
  amplitude: number;
  frequency: number;
}

export class ParticleRenderer {
  private ctx: CanvasRenderingContext2D;
  private time = 0;
  private isDebugMode = false;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  updateTime(time: number): void {
    this.time = time;
  }

  setDebugMode(debug: boolean): void {
    this.isDebugMode = debug;
  }

  drawParticles(particles: IParticle[], resonanceNodes: ResonanceNode[], energyCascades: EnergyCascade[], standingWaves: StandingWave[], canvasWidth: number, canvasHeight: number): void {
    if (!this.ctx) return;

    // Use passed dimensions instead of querying DOM
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    this.drawConnections(particles);

    // Phase 4: Enhanced visual effect rendering
    particles.forEach(particle => {
      if (particle.trail.length > 1) {
        this.drawTrail(particle);
      }

      this.drawParticle(particle);

      if (particle.glowIntensity > 0.2) {
        this.drawGlow(particle);
      }

      // Phase 2: Type-specific effects
      this.drawTypeIdentifier(particle);

      // Phase 4: Field interaction visualization
      this.drawFieldInteractionLines(particle, particles);
    });

    // Phase 4: Global field effect overlays
    this.drawGlobalFieldEffects(particles, canvasWidth, canvasHeight);

    // Phase 5: Advanced effects visualization
    this.drawAdvancedEffects(resonanceNodes, energyCascades, standingWaves);

    // Phase 2: Advanced diagnostics overlay
    this.drawDiagnostics(particles, resonanceNodes, energyCascades, standingWaves);
  }

  private drawConnections(particles: IParticle[]): void {
    particles.forEach((particle, i) => {
      particle.connections.forEach(connectionIndex => {
        if (connectionIndex > i) {
          const other = particles[connectionIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < Constants.CONNECTION_DISTANCE) {
            const opacity = (1 - distance / Constants.CONNECTION_DISTANCE) * 0.3;
            const avgHue = (particle.hue + other.hue) / 2;

            this.ctx.strokeStyle = `hsla(${avgHue}, 70%, 60%, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(particle.x, particle.y);
            this.ctx.lineTo(other.x, other.y);
            this.ctx.stroke();
          }
        }
      });
    });
  }

  private drawTrail(particle: IParticle): void {
    particle.trail.forEach((point, index) => {
      if (index === 0) return;

      const prevPoint = particle.trail[index - 1];
      const opacity = point.opacity * 0.3;

      this.ctx.strokeStyle = `hsla(${particle.hue}, 60%, 50%, ${opacity})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(prevPoint.x, prevPoint.y);
      this.ctx.lineTo(point.x, point.y);
      this.ctx.stroke();
    });
  }

  private drawParticle(particle: IParticle): void {
    // High saturation for battlefield effect - specialized particles get more vibrant colors
    const saturation = particle.type === ParticleType.REGULAR ? 70 : 90;
    const lightness = particle.type === ParticleType.REGULAR ? 60 : 70;

    this.ctx.fillStyle = `hsla(${particle.hue}, ${saturation}%, ${lightness}%, ${particle.opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  private drawGlow(particle: IParticle): void {
    const glowSize = particle.size * (1.5 + particle.glowIntensity * 1);
    const glowOpacity = particle.glowIntensity * 0.15;

    // Higher saturation for glows too
    const saturation = particle.type === ParticleType.REGULAR ? 70 : 85;
    const lightness = particle.type === ParticleType.REGULAR ? 60 : 75;

    this.ctx.fillStyle = `hsla(${particle.hue}, ${saturation}%, ${lightness}%, ${glowOpacity})`;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
    this.ctx.fill();
  }

  // Phase 2: Enhanced type-specific visual effects
  private drawTypeIdentifier(particle: IParticle): void {
    if (particle.type === ParticleType.REGULAR) return;

    const ringSize = particle.size * 1.8;
    // Higher saturation for field effects
    this.ctx.strokeStyle = `hsla(${particle.hue}, 90%, 75%, 0.6)`;
    this.ctx.lineWidth = 1;

    switch (particle.type) {
      case ParticleType.ELECTRIC:
        this.drawElectricFieldEffects(particle, ringSize);
        break;
      case ParticleType.MAGNETIC:
        this.drawMagneticFieldEffects(particle, ringSize);
        break;
      case ParticleType.GRAVITATIONAL:
        this.drawGravitationalFieldEffects(particle, ringSize);
        break;
      case ParticleType.QUANTUM:
        this.drawQuantumFieldEffects(particle, ringSize);
        break;
    }
  }

  // Phase 2A: Electric Field Visual Effects
  private drawElectricFieldEffects(particle: IParticle, ringSize: number): void {
    // Radial electric field lines
    const lineCount = 8;
    const chargeStrength = Math.abs(particle.electricCharge);
    const lineLength = ringSize * (0.8 + chargeStrength * 0.7);

    this.ctx.strokeStyle = `hsla(${particle.hue}, 90%, 70%, ${0.3 + chargeStrength * 0.4})`;
    this.ctx.lineWidth = 1 + chargeStrength;

    for (let i = 0; i < lineCount; i++) {
      const angle = (i / lineCount) * Math.PI * 2 + particle.chargePhase * 0.1;
      const startX = particle.x + Math.cos(angle) * ringSize;
      const startY = particle.y + Math.sin(angle) * ringSize;
      const endX = particle.x + Math.cos(angle) * lineLength;
      const endY = particle.y + Math.sin(angle) * lineLength;

      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    }
  }

  // Phase 2B: Magnetic Field Visual Effects
  private drawMagneticFieldEffects(particle: IParticle, ringSize: number): void {
    // Rotating magnetic field rings with wave effects
    const ringCount = 3;
    this.ctx.strokeStyle = `hsla(${particle.hue}, 80%, 60%, 0.4)`;
    this.ctx.lineWidth = 2;

    for (let i = 0; i < ringCount; i++) {
      const radius = ringSize * (0.7 + i * 0.3);
      const waveOffset = Math.sin(particle.magneticPhase + i) * 0.2;

      // Ensure radius is always positive
      const finalRadius = Math.max(1, radius + waveOffset * 10);

      // Dashed ring with wave distortion
      this.ctx.setLineDash([4, 4]);
      this.ctx.lineDashOffset = particle.rotationPhase * 15 + i * 10;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, finalRadius, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    this.ctx.setLineDash([]); // Reset
  }

  // Phase 2C: Gravitational Field Visual Effects
  private drawGravitationalFieldEffects(particle: IParticle, ringSize: number): void {
    // Gravitational spiral effect
    const spiralTurns = 2;
    const maxRadius = ringSize * 1.5;
    const points = 30;

    this.ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, 0.3)`;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();

    for (let i = 0; i <= points; i++) {
      const t = i / points;
      const angle = t * spiralTurns * Math.PI * 2 + particle.phase;
      const radius = maxRadius * t * particle.gravitationalStrength * 0.5;

      const x = particle.x + Math.cos(angle) * radius;
      const y = particle.y + Math.sin(angle) * radius;

      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }

    this.ctx.stroke();
  }

  // Phase 2D: Quantum Field Visual Effects
  private drawQuantumFieldEffects(particle: IParticle, ringSize: number): void {
    // Quantum uncertainty cloud
    const cloudPoints = 12;

    for (let i = 0; i < cloudPoints; i++) {
      const angle = (i / cloudPoints) * Math.PI * 2 + particle.quantumState;
      const distance = ringSize * (0.5 + Math.random() * 0.8);
      const uncertainty = (Math.random() - 0.5) * 15; // Position uncertainty

      const x = particle.x + Math.cos(angle) * distance + uncertainty;
      const y = particle.y + Math.sin(angle) * distance + uncertainty;
      const opacity = 0.1 + Math.random() * 0.3;

      this.ctx.fillStyle = `hsla(${particle.hue}, 60%, 60%, ${opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  // Phase 4: Field Interaction Line Visualization
  private drawFieldInteractionLines(particle: IParticle, particles: IParticle[]): void {
    particles.forEach(otherParticle => {
      if (particle === otherParticle) return;

      const dx = otherParticle.x - particle.x;
      const dy = otherParticle.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100 && distance > 0) { // Close interaction range
        const interactionType = this.getInteractionType(particle.type, otherParticle.type);
        this.drawInteractionLine(particle, otherParticle, interactionType, distance);
      }
    });
  }

  // Phase 4A: Draw specific interaction line
  private drawInteractionLine(particle1: IParticle, particle2: IParticle, interactionType: string, distance: number): void {
    const opacity = (1 - distance / 100) * 0.6;
    const midX = (particle1.x + particle2.x) / 2;
    const midY = (particle1.y + particle2.y) / 2;

    this.ctx.lineWidth = 2;

    switch (interactionType) {
      case 'ELECTRIC_ELECTRIC':
        // Electric field lines - blue/red based on charge
        const charge1 = particle1.electricCharge;
        const charge2 = particle2.electricCharge;
        const isAttraction = charge1 * charge2 < 0;
        this.ctx.strokeStyle = isAttraction
          ? `rgba(100, 255, 100, ${opacity})` // Green for attraction
          : `rgba(255, 100, 100, ${opacity})`; // Red for repulsion
        break;
      case 'MAGNETIC_MAGNETIC':
        // Magnetic field lines - oscillating color
        const colorPhase = (particle1.magneticPhase + particle2.magneticPhase) / 2;
        const hue = 240 + Math.sin(colorPhase) * 60; // Blue to cyan oscillation
        this.ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${opacity})`;
        break;
      case 'GRAVITATIONAL_GRAVITATIONAL':
        // Gravitational wells - purple
        this.ctx.strokeStyle = `rgba(180, 100, 255, ${opacity})`;
        break;
      case 'QUANTUM_QUANTUM':
        // Quantum entanglement - flickering random colors
        const quantumHue = Math.random() * 360;
        this.ctx.strokeStyle = `hsla(${quantumHue}, 70%, 70%, ${opacity * 0.7})`;
        break;
      default:
        // Default interaction - gray
        this.ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.3})`;
    }

    this.ctx.beginPath();
    this.ctx.moveTo(particle1.x, particle1.y);
    this.ctx.lineTo(particle2.x, particle2.y);
    this.ctx.stroke();

    // Phase 4B: Interaction strength indicator at midpoint
    this.drawInteractionIndicator(midX, midY, interactionType, opacity);
  }

  // Phase 4C: Draw interaction strength indicator
  private drawInteractionIndicator(x: number, y: number, interactionType: string, opacity: number): void {
    const size = 3;

    switch (interactionType) {
      case 'ELECTRIC_ELECTRIC':
        // Electric symbol
        this.ctx.fillStyle = `rgba(255, 255, 0, ${opacity})`;
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
        break;
      case 'MAGNETIC_MAGNETIC':
        // Magnetic symbol
        this.ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fill();
        break;
      case 'GRAVITATIONAL_GRAVITATIONAL':
        // Gravitational symbol
        this.ctx.fillStyle = `rgba(255, 0, 255, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
        this.ctx.fill();
        break;
      case 'QUANTUM_QUANTUM':
        // Quantum symbol - flickering
        if (Math.random() > 0.7) {
          this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          this.ctx.fillRect(x - size/3, y - size/3, size/1.5, size/1.5);
        }
        break;
    }
  }

  // Phase 4D: Global Field Effect Overlays
  private drawGlobalFieldEffects(particles: IParticle[], canvasWidth: number, canvasHeight: number): void {
    // Electric field grid overlay
    this.drawElectricFieldGrid(particles, canvasWidth, canvasHeight);

    // Magnetic field wave patterns - TEMPORARILY DISABLED (too many rings)
    // this.drawMagneticFieldWaves(particles);

    // Gravitational field distortion - TEMPORARILY DISABLED
    // this.drawGravitationalFieldDistortion(particles);

    // Quantum field uncertainty cloud
    this.drawQuantumFieldUncertainty(particles);
  }

  // Phase 4E: Electric field grid visualization
  private drawElectricFieldGrid(particles: IParticle[], canvasWidth: number, canvasHeight: number): void {
    const electricParticles = particles.filter(p => p.type === ParticleType.ELECTRIC && Math.abs(p.electricCharge) > 0.5);
    if (electricParticles.length === 0) return;

    const gridSize = 40;
    this.ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
    this.ctx.lineWidth = 1;

    // Use passed dimensions instead of querying DOM
    for (let x = 0; x < canvasWidth; x += gridSize) {
      for (let y = 0; y < canvasHeight; y += gridSize) {
        let fieldStrength = 0;

        electricParticles.forEach(particle => {
          const dx = x - particle.x;
          const dy = y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0) {
            fieldStrength += particle.electricCharge / (distance * 0.1);
          }
        });

        if (Math.abs(fieldStrength) > 0.1) {
          const alpha = Math.min(Math.abs(fieldStrength) * 0.1, 0.3);
          this.ctx.strokeStyle = fieldStrength > 0
            ? `rgba(255, 100, 100, ${alpha})`
            : `rgba(100, 100, 255, ${alpha})`;

          this.ctx.beginPath();
          this.ctx.arc(x, y, 2, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }
    }
  }

  // Phase 4H: Quantum field uncertainty cloud visualization
  private drawQuantumFieldUncertainty(particles: IParticle[]): void {
    const quantumParticles = particles.filter(p => p.type === ParticleType.QUANTUM);
    if (quantumParticles.length === 0) return;

    quantumParticles.forEach(particle => {
      const cloudSize = 60;
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + particle.quantumState;
        const distance = Math.random() * cloudSize;
        const uncertainty = (Math.random() - 0.5) * 20;

        const x = particle.x + Math.cos(angle) * distance + uncertainty;
        const y = particle.y + Math.sin(angle) * distance + uncertainty;
        const opacity = 0.05 + Math.random() * 0.1;

        this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 1, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  // Phase 5: Advanced Effects Visualization System
  private drawAdvancedEffects(resonanceNodes: ResonanceNode[], energyCascades: EnergyCascade[], standingWaves: StandingWave[]): void {
    // Phase 5A: Draw resonance nodes
    this.drawResonanceNodes(resonanceNodes);

    // Phase 5B: Draw energy cascades
    this.drawEnergyCascades(energyCascades);

    // Phase 5C: Draw standing waves
    this.drawStandingWaves(standingWaves);
  }

  // Phase 5A: Resonance Node Visualization
  private drawResonanceNodes(resonanceNodes: ResonanceNode[]): void {
    resonanceNodes.forEach(node => {
      const intensity = Math.max(0.01, node.strength); // Ensure positive intensity
      const pulseSize = 10 + Math.sin(this.time * 0.2) * 5;

      // Core resonance visualization
      this.ctx.save();
      this.ctx.globalAlpha = intensity * 0.8;

      switch (node.type) {
        case 'ELECTRIC_RESONANCE':
          this.ctx.fillStyle = '#FFD700'; // Gold
          break;
        case 'MAGNETIC_RESONANCE':
          this.ctx.fillStyle = '#00FFFF'; // Cyan
          break;
        case 'GRAVITATIONAL_RESONANCE':
          this.ctx.fillStyle = '#9932CC'; // Purple
          break;
        case 'QUANTUM_COHERENCE':
          this.ctx.fillStyle = '#FFFFFF'; // White
          break;
        default:
          this.ctx.fillStyle = '#C0C0C0'; // Silver
      }

      // Pulsing central core - ensure positive radius
      const coreRadius = Math.max(1, pulseSize * intensity);
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, coreRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // Resonance rings - ensure positive radius
      for (let i = 1; i <= 3; i++) {
        this.ctx.strokeStyle = this.ctx.fillStyle;
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = intensity * 0.3 / i;

        const ringRadius = Math.max(1, pulseSize * intensity + i * 15);
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      this.ctx.restore();
    });
  }

  // Phase 5B: Energy Cascade Visualization
  private drawEnergyCascades(energyCascades: EnergyCascade[]): void {
    energyCascades.forEach(cascade => {
      const sourceParticle = cascade.source;
      const intensity = cascade.strength;

      cascade.targets.forEach((target, index) => {
        // Energy beam from source to target
        const progress = (this.time * 0.1 + index * 0.3) % 1;
        const beamX = sourceParticle.x + (target.x - sourceParticle.x) * progress;
        const beamY = sourceParticle.y + (target.y - sourceParticle.y) * progress;

        this.ctx.save();
        this.ctx.globalAlpha = intensity * 0.7;

        // Cascade beam color based on source type
        switch (sourceParticle.type) {
          case ParticleType.ELECTRIC:
            this.ctx.strokeStyle = '#FF69B4'; // Hot Pink
            break;
          case ParticleType.MAGNETIC:
            this.ctx.strokeStyle = '#00CED1'; // Dark Turquoise
            break;
          case ParticleType.GRAVITATIONAL:
            this.ctx.strokeStyle = '#DA70D6'; // Orchid
            break;
          case ParticleType.QUANTUM:
            this.ctx.strokeStyle = '#F0F8FF'; // Alice Blue
            break;
          default:
            this.ctx.strokeStyle = '#FFB6C1'; // Light Pink
        }

        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';

        // Draw energy beam
        this.ctx.beginPath();
        this.ctx.moveTo(sourceParticle.x, sourceParticle.y);
        this.ctx.lineTo(beamX, beamY);
        this.ctx.stroke();

        // Energy pulse at beam head - ensure positive radius
        this.ctx.fillStyle = this.ctx.strokeStyle;
        const pulseRadius = Math.max(1, 4 + intensity * 3);
        this.ctx.beginPath();
        this.ctx.arc(beamX, beamY, pulseRadius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
      });
    });
  }

  // Phase 5C: Standing Wave Visualization
  private drawStandingWaves(standingWaves: StandingWave[]): void {
    standingWaves.forEach(wave => {
      const particles = wave.particles;
      const amplitude = wave.amplitude;
      const frequency = wave.frequency;

      if (particles.length < 2) return;

      // Calculate wave pattern between particles
      for (let i = 0; i < particles.length - 1; i++) {
        const p1 = particles[i];
        const p2 = particles[i + 1];

        this.ctx.save();
        this.ctx.strokeStyle = '#40E0D0'; // Turquoise
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.6;

        // Draw standing wave pattern
        const steps = 20;
        this.ctx.beginPath();

        for (let step = 0; step <= steps; step++) {
          const t = step / steps;
          const baseX = p1.x + (p2.x - p1.x) * t;
          const baseY = p1.y + (p2.y - p1.y) * t;

          // Standing wave equation
          const wavePhase = this.time * frequency * 0.1;
          const standingWave = Math.sin(t * Math.PI * 4 + wavePhase) * Math.cos(t * Math.PI * 2);
          const waveOffset = standingWave * amplitude * 0.3;

          // Perpendicular offset
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const perpX = -dy / length * waveOffset;
          const perpY = dx / length * waveOffset;

          const waveX = baseX + perpX;
          const waveY = baseY + perpY;

          if (step === 0) {
            this.ctx.moveTo(waveX, waveY);
          } else {
            this.ctx.lineTo(waveX, waveY);
          }
        }

        this.ctx.stroke();
        this.ctx.restore();
      }

      // Draw wave nodes (points of zero amplitude)
      particles.forEach(particle => {
        this.ctx.save();
        this.ctx.fillStyle = '#20B2AA'; // Light Sea Green
        this.ctx.globalAlpha = 0.8;

        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();
      });
    });
  }

  // Phase 2: Advanced diagnostic overlay
  private drawDiagnostics(particles: IParticle[], resonanceNodes: ResonanceNode[], energyCascades: EnergyCascade[], standingWaves: StandingWave[]): void {
    if (!this.isDebugMode) return;

    const particleCounts = this.getParticleTypeCounts(particles);
    const yStart = 10;
    const lineHeight = 16;

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.font = '12px monospace';

    // Basic stats
    this.ctx.fillText(`Total: ${particles.length}`, 10, yStart);
    this.ctx.fillText(`Regular: ${particleCounts.regular} (${(particleCounts.regular/particles.length*100).toFixed(1)}%)`, 10, yStart + lineHeight);
    this.ctx.fillText(`Electric: ${particleCounts.electric} (${(particleCounts.electric/particles.length*100).toFixed(1)}%)`, 10, yStart + lineHeight * 2);
    this.ctx.fillText(`Magnetic: ${particleCounts.magnetic} (${(particleCounts.magnetic/particles.length*100).toFixed(1)}%)`, 10, yStart + lineHeight * 3);
    this.ctx.fillText(`Gravitational: ${particleCounts.gravitational} (${(particleCounts.gravitational/particles.length*100).toFixed(1)}%)`, 10, yStart + lineHeight * 4);
    this.ctx.fillText(`Quantum: ${particleCounts.quantum} (${(particleCounts.quantum/particles.length*100).toFixed(1)}%)`, 10, yStart + lineHeight * 5);

    // Phase 2: Field behavior stats
    const fieldStats = this.calculateFieldStats(particles);
    this.ctx.fillText('--- Phase 2 Field Behaviors ---', 10, yStart + lineHeight * 7);
    this.ctx.fillText(`Active Electric Fields: ${fieldStats.activeElectric}`, 10, yStart + lineHeight * 8);
    this.ctx.fillText(`Charging Particles: ${fieldStats.chargingParticles}`, 10, yStart + lineHeight * 9);
    this.ctx.fillText(`Magnetic Wave Amplitude: ${fieldStats.avgMagneticAmplitude.toFixed(3)}`, 10, yStart + lineHeight * 10);
    this.ctx.fillText(`Gravitational Strength: ${fieldStats.totalGravitationalStrength.toFixed(3)}`, 10, yStart + lineHeight * 11);
    this.ctx.fillText(`Quantum Tunneling Events: ${fieldStats.quantumTunnels}/frame`, 10, yStart + lineHeight * 12);

    // Phase 3: Binary interaction stats
    const binaryStats = this.calculateBinaryInteractionStats(particles);
    this.ctx.fillText('--- Phase 3 Binary Interactions ---', 10, yStart + lineHeight * 14);
    this.ctx.fillText(`Active Interactions: ${binaryStats.totalInteractions}`, 10, yStart + lineHeight * 15);
    this.ctx.fillText(`Coulomb Forces: ${binaryStats.coulombInteractions}`, 10, yStart + lineHeight * 16);
    this.ctx.fillText(`Magnetic Coupling: ${binaryStats.magneticInteractions}`, 10, yStart + lineHeight * 17);
    this.ctx.fillText(`Gravitational Pairs: ${binaryStats.gravitationalInteractions}`, 10, yStart + lineHeight * 18);
    this.ctx.fillText(`Quantum Entanglements: ${binaryStats.quantumInteractions}`, 10, yStart + lineHeight * 19);

    // Phase 5: Advanced effects stats
    this.ctx.fillText('--- Phase 5 Advanced Effects ---', 10, yStart + lineHeight * 21);
    this.ctx.fillText(`Resonance Nodes: ${resonanceNodes.length}`, 10, yStart + lineHeight * 22);
    this.ctx.fillText(`Energy Cascades: ${energyCascades.length}`, 10, yStart + lineHeight * 23);
    this.ctx.fillText(`Standing Waves: ${standingWaves.length}`, 10, yStart + lineHeight * 24);
    this.ctx.fillText(`Field Interference: Active`, 10, yStart + lineHeight * 25);
  }

  // Phase 2: Calculate field behavior statistics
  private calculateFieldStats(particles: IParticle[]) {
    let activeElectric = 0;
    let chargingParticles = 0;
    let totalMagneticAmplitude = 0;
    let magneticCount = 0;
    let totalGravitationalStrength = 0;
    let quantumTunnels = 0;

    particles.forEach(particle => {
      switch (particle.type) {
        case ParticleType.ELECTRIC:
          if (Math.abs(particle.electricCharge) > 0.5) activeElectric++;
          if (particle.isCharging) chargingParticles++;
          break;
        case ParticleType.MAGNETIC:
          totalMagneticAmplitude += particle.waveAmplitude;
          magneticCount++;
          break;
        case ParticleType.GRAVITATIONAL:
          totalGravitationalStrength += particle.gravitationalStrength;
          break;
        case ParticleType.QUANTUM:
          if (Math.random() < particle.tunnelProbability) quantumTunnels++;
          break;
      }
    });

    return {
      activeElectric,
      chargingParticles,
      avgMagneticAmplitude: magneticCount > 0 ? totalMagneticAmplitude / magneticCount : 0,
      totalGravitationalStrength,
      quantumTunnels
    };
  }

  // Phase 3: Calculate binary interaction statistics
  private calculateBinaryInteractionStats(particles: IParticle[]) {
    let totalInteractions = 0;
    let coulombInteractions = 0;
    let magneticInteractions = 0;
    let gravitationalInteractions = 0;
    let quantumInteractions = 0;

    particles.forEach((particle1, i) => {
      particles.forEach((particle2, j) => {
        if (i >= j) return; // Avoid double counting

        const dx = particle2.x - particle1.x;
        const dy = particle2.y - particle1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) { // Interaction range
          totalInteractions++;

          const interactionType = this.getInteractionType(particle1.type, particle2.type);

          switch (interactionType) {
            case 'ELECTRIC_ELECTRIC':
              coulombInteractions++;
              break;
            case 'ELECTRIC_MAGNETIC':
              coulombInteractions++;
              magneticInteractions++;
              break;
            case 'MAGNETIC_MAGNETIC':
              magneticInteractions++;
              break;
            case 'GRAVITATIONAL_GRAVITATIONAL':
              gravitationalInteractions++;
              break;
            case 'QUANTUM_QUANTUM':
              quantumInteractions++;
              break;
          }
        }
      });
    });

    return {
      totalInteractions,
      coulombInteractions,
      magneticInteractions,
      gravitationalInteractions,
      quantumInteractions
    };
  }

  // Phase 2: Particle type counting utility
  private getParticleTypeCounts(particles: IParticle[]) {
    return particles.reduce((counts, particle) => {
      switch (particle.type) {
        case ParticleType.REGULAR:
          counts.regular++;
          break;
        case ParticleType.ELECTRIC:
          counts.electric++;
          break;
        case ParticleType.MAGNETIC:
          counts.magnetic++;
          break;
        case ParticleType.GRAVITATIONAL:
          counts.gravitational++;
          break;
        case ParticleType.QUANTUM:
          counts.quantum++;
          break;
      }
      return counts;
    }, {
      regular: 0,
      electric: 0,
      magnetic: 0,
      gravitational: 0,
      quantum: 0
    });
  }

  private getInteractionType(type1: ParticleType, type2: ParticleType): string {
    const types = [type1, type2].sort();

    if (types[0] === ParticleType.ELECTRIC && types[1] === ParticleType.ELECTRIC) {
      return 'ELECTRIC_ELECTRIC';
    } else if (types[0] === ParticleType.ELECTRIC && types[1] === ParticleType.MAGNETIC) {
      return 'ELECTRIC_MAGNETIC';
    } else if (types[0] === ParticleType.MAGNETIC && types[1] === ParticleType.MAGNETIC) {
      return 'MAGNETIC_MAGNETIC';
    } else if (types[0] === ParticleType.GRAVITATIONAL && types[1] === ParticleType.GRAVITATIONAL) {
      return 'GRAVITATIONAL_GRAVITATIONAL';
    } else if (types[0] === ParticleType.QUANTUM && types[1] === ParticleType.QUANTUM) {
      return 'QUANTUM_QUANTUM';
    }

    return 'DEFAULT';
  }
}