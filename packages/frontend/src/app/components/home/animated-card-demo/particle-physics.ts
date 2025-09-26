import { IParticle, ParticleType } from './particle.model';
import * as Constants from './constants';

export class ParticlePhysics {
  private time = 0;
  private quantumTunnelCallback?: (particle: IParticle) => void;

  constructor() {
    this.time = 0;
  }

  setQuantumTunnelCallback(callback: (particle: IParticle) => void): void {
    this.quantumTunnelCallback = callback;
  }

  updateTime(time: number): void {
    this.time = time;
  }

  updateParticles(particles: IParticle[], displayWidth: number, displayHeight: number): void {
    this.calculateDensityGlow(particles);

    particles.forEach((particle, index) => {
      // Update trail
      particle.trail.push({
        x: particle.x,
        y: particle.y,
        opacity: 1.0
      });

      if (particle.trail.length > 8) {
        particle.trail.shift();
      }
      particle.trail.forEach((point, i) => {
        point.opacity = 1.0 - (i / particle.trail.length) * 0.8;
      });

      // Phase 1: Basic force application (no complex physics yet)
      this.applyBasicForces(particle, index);

      // Update type-specific behavior
      this.updateParticleTypeProperties(particle);

      // Phase 3: Apply binary interaction forces
      this.applyBinaryInteractions(particle, index, particles);

      // Phase 5: Advanced effect processing
      this.processAdvancedEffects(particle, index, particles);

      // Apply motion
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply damping
      particle.vx *= Constants.DAMPING_FACTOR;
      particle.vy *= Constants.DAMPING_FACTOR;

      // Boundary handling
      this.handleBoundaries(particle, displayWidth, displayHeight);

      // Update visual properties
      this.updateVisualProperties(particle);
    });
  }

  // Phase 1: Basic force system (foundation for later phases)
  private applyBasicForces(particle: IParticle, index: number): void {
    let forceX = 0;
    let forceY = 0;

    // Basic environmental forces
    const brownianX = (Math.random() - 0.5) * 0.001;
    const brownianY = (Math.random() - 0.5) * 0.001;

    // Time-based fluctuations
    const timeOffset = index * 0.1;
    const environmentalX = Math.sin(this.time * 0.01 + timeOffset) * 0.0005;
    const environmentalY = Math.cos(this.time * 0.01 + timeOffset) * 0.0005;

    forceX += brownianX + environmentalX;
    forceY += brownianY + environmentalY;

    // Apply forces
    particle.vx += forceX;
    particle.vy += forceY;
  }

  // Phase 2: Type-specific property updates with individual field behaviors
  private updateParticleTypeProperties(particle: IParticle): void {
    // Update phase for all particles
    particle.phase += 0.02;
    particle.pulsePhase += 0.03;
    particle.rotationPhase += 0.01;

    // Phase 2: Individual Field Behaviors
    switch (particle.type) {
      case ParticleType.ELECTRIC:
        this.updateElectricField(particle);
        break;
      case ParticleType.MAGNETIC:
        this.updateMagneticField(particle);
        break;
      case ParticleType.GRAVITATIONAL:
        this.updateGravitationalField(particle);
        break;
      case ParticleType.QUANTUM:
        this.updateQuantumField(particle);
        break;
      case ParticleType.REGULAR:
        particle.glowIntensity *= 0.95;
        break;
    }
  }

  // Phase 2A: Electric Field Pulsing Mechanics
  private updateElectricField(particle: IParticle): void {
    // Update charge phase
    particle.chargePhase += 0.08;

    // Pulsing charge/discharge cycle
    const chargeCycle = Math.sin(particle.chargePhase);

    // Switch between charging and discharging
    if (particle.chargePhase > Math.PI * 2) {
      particle.chargePhase = 0;
      particle.isCharging = !particle.isCharging;
    }

    // Electric field strength varies with charge state
    const chargeStrength = particle.isCharging ?
      Math.abs(chargeCycle) :
      1 - Math.abs(chargeCycle);

    // Update visual properties
    particle.glowIntensity = 0.2 + chargeStrength * 0.6;
    particle.size = particle.originalSize * (1 + chargeStrength * 0.3);

    // Electric particles create radial field effects
    particle.electricCharge = chargeStrength * (particle.isCharging ? 1 : -1);
  }

  // Phase 2B: Magnetic Wave Generation
  private updateMagneticField(particle: IParticle): void {
    // Update magnetic phase for wave generation
    particle.magneticPhase += particle.waveFrequency;

    // Generate longitudinal waves
    const waveState = Math.sin(particle.magneticPhase);
    particle.waveAmplitude = 0.3 + waveState * 0.2;

    // Visual updates
    particle.glowIntensity = 0.25;
    particle.size = particle.originalSize * (1 + waveState * 0.1);
    particle.rotationPhase += 0.03; // Rotating field effect
  }

  // Phase 2C: Gravitational Well Physics
  private updateGravitationalField(particle: IParticle): void {
    // Constant gravitational pull
    particle.glowIntensity = 0.4;

    // Gentle pulsing to show gravitational waves
    const gravWave = Math.sin(particle.phase * 0.5);
    particle.size = particle.originalSize * (1 + gravWave * 0.15);
    particle.gravitationalStrength = 1 + gravWave * 0.3;
  }

  // Phase 2D: Quantum Tunneling Mechanics
  private updateQuantumField(particle: IParticle): void {
    // Update quantum state
    particle.quantumState += 0.1;

    // Quantum uncertainty in visual properties
    particle.glowIntensity = 0.1 + Math.random() * 0.3;
    particle.opacity = particle.opacity * 0.98 + (Math.random() * 0.4 + 0.3) * 0.02;

    // Quantum tunneling probability check
    if (Math.random() < particle.tunnelProbability) {
      this.performQuantumTunnel(particle);
    }
  }

  // Phase 2D: Quantum Tunneling Implementation
  private performQuantumTunnel(particle: IParticle): void {
    if (this.quantumTunnelCallback) {
      this.quantumTunnelCallback(particle);
    }
  }

  // Phase 3: Binary Interaction Engine with Asymmetric Forces
  private applyBinaryInteractions(particle: IParticle, currentIndex: number, particles: IParticle[]): void {
    particles.forEach((otherParticle, otherIndex) => {
      if (currentIndex === otherIndex) return;

      const dx = otherParticle.x - particle.x;
      const dy = otherParticle.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150 && distance > 0) { // Interaction range
        let force = this.calculateBinaryForce(particle, otherParticle, distance);

        // Asymmetric interactions: Normal particles don't influence specialized particles
        if (this.shouldApplyAsymmetricInteraction(particle, otherParticle)) {
          force = 0; // Normal particle doesn't affect specialized particle
        }

        // Add minimum distance repulsion to prevent clustering
        if (distance < 20) {
          const repulsionStrength = (20 - distance) * 0.001; // Strong repulsion when very close
          force -= repulsionStrength;
        }

        const forceX = (dx / distance) * force;
        const forceY = (dy / distance) * force;

        particle.vx += forceX;
        particle.vy += forceY;
      }
    });
  }

  // Asymmetric interaction logic: Normal particles don't influence specialized ones
  private shouldApplyAsymmetricInteraction(particle: IParticle, otherParticle: IParticle): boolean {
    // If particle is normal and other is specialized, no influence
    if (particle.type === ParticleType.REGULAR && otherParticle.type !== ParticleType.REGULAR) {
      return true; // Block the interaction
    }
    return false; // Allow the interaction
  }

  // Phase 3A: Calculate force between two particles
  private calculateBinaryForce(particle1: IParticle, particle2: IParticle, distance: number): number {
    const interactionType = this.getInteractionType(particle1.type, particle2.type);
    const baseForce = this.getBaseForceForInteraction(particle1.type, particle2.type);
    const distanceFactor = 1 / (distance * distance + 0.1); // Prevent division by zero

    const interactionStrength = Constants.INTERACTION_MATRIX[interactionType as keyof typeof Constants.INTERACTION_MATRIX] || 0.5;
    let force = baseForce * distanceFactor * interactionStrength;

    // Phase 3B: Type-specific force calculations
    switch (interactionType) {
      case 'ELECTRIC_ELECTRIC':
        force *= this.calculateElectricElectricForce(particle1, particle2);
        break;
      case 'ELECTRIC_MAGNETIC':
        force *= this.calculateElectromagneticForce(particle1, particle2);
        break;
      case 'MAGNETIC_MAGNETIC':
        force *= this.calculateMagneticMagneticForce(particle1, particle2);
        break;
      case 'GRAVITATIONAL_GRAVITATIONAL':
        force *= this.calculateGravitationalForce(particle1, particle2);
        break;
      case 'QUANTUM_QUANTUM':
        force *= this.calculateQuantumEntanglementForce(particle1, particle2);
        break;
      default:
        force *= 0.5; // Default weak interaction
    }

    return force;
  }

  // Phase 3C: Get interaction type string
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

  // Phase 3D: Get base force strength for interaction type
  private getBaseForceForInteraction(type1: ParticleType, type2: ParticleType): number {
    if (type1 === ParticleType.ELECTRIC || type2 === ParticleType.ELECTRIC) {
      return Constants.COULOMB_FORCE_STRENGTH;
    } else if (type1 === ParticleType.MAGNETIC || type2 === ParticleType.MAGNETIC) {
      return Constants.MAGNETIC_INTERACTION_STRENGTH;
    } else if (type1 === ParticleType.GRAVITATIONAL || type2 === ParticleType.GRAVITATIONAL) {
      return Constants.GRAVITATIONAL_INTERACTION_STRENGTH;
    } else if (type1 === ParticleType.QUANTUM || type2 === ParticleType.QUANTUM) {
      return Constants.QUANTUM_ENTANGLEMENT_STRENGTH;
    }

    return Constants.BASE_FORCE_CONSTANT;
  }

  // Phase 3E: Electric-Electric force calculation (Coulomb's Law)
  private calculateElectricElectricForce(particle1: IParticle, particle2: IParticle): number {
    const charge1 = particle1.electricCharge;
    const charge2 = particle2.electricCharge;
    const forceDirection = charge1 * charge2 < 0 ? 1 : -1; // Attract if opposite, repel if same

    return forceDirection * Math.abs(charge1 * charge2);
  }

  // Phase 3F: Electromagnetic force calculation
  private calculateElectromagneticForce(particle1: IParticle, particle2: IParticle): number {
    let electricParticle, magneticParticle;

    if (particle1.type === ParticleType.ELECTRIC) {
      electricParticle = particle1;
      magneticParticle = particle2;
    } else {
      electricParticle = particle2;
      magneticParticle = particle1;
    }

    const electricField = Math.abs(electricParticle.electricCharge);
    const magneticField = magneticParticle.waveAmplitude;
    const relativeMagnitude = Math.sin(magneticParticle.magneticPhase);

    return electricField * magneticField * relativeMagnitude * 0.3;
  }

  // Phase 3G: Magnetic-Magnetic force calculation
  private calculateMagneticMagneticForce(particle1: IParticle, particle2: IParticle): number {
    const amplitude1 = particle1.waveAmplitude;
    const amplitude2 = particle2.waveAmplitude;
    const phaseDifference = Math.abs(particle1.magneticPhase - particle2.magneticPhase);

    // Constructive/destructive interference with repulsion bias
    const interference = Math.cos(phaseDifference);

    // Add repulsion component to prevent clustering
    const baseRepulsion = -0.3; // Small repulsion to prevent collapse
    const magneticInteraction = interference * 0.5; // Reduced attraction strength

    return amplitude1 * amplitude2 * (baseRepulsion + magneticInteraction);
  }

  // Phase 3H: Gravitational force calculation
  private calculateGravitationalForce(particle1: IParticle, particle2: IParticle): number {
    const mass1 = particle1.gravitationalStrength;
    const mass2 = particle2.gravitationalStrength;

    return mass1 * mass2; // Always attractive
  }

  // Phase 3I: Quantum entanglement force calculation
  private calculateQuantumEntanglementForce(particle1: IParticle, particle2: IParticle): number {
    const quantum1 = particle1.quantumState;
    const quantum2 = particle2.quantumState;
    const entanglement = Math.sin(quantum1 - quantum2);

    // Quantum uncertainty effect
    const uncertainty = (Math.random() - 0.5) * 0.4;

    return entanglement + uncertainty;
  }

  // Phase 5: Advanced Effects Processing System
  private processAdvancedEffects(particle: IParticle, currentIndex: number, particles: IParticle[]): void {
    // Phase 5A: Detect and process resonance nodes
    this.detectResonanceNodes(particle, particles);

    // Phase 5B: Create energy cascades
    this.createEnergyCascades(particle, currentIndex, particles);

    // Phase 5C: Generate standing waves
    this.generateStandingWaves(particle, particles);

    // Phase 5D: Apply field interference effects
    this.applyFieldInterference(particle, particles);
  }

  // Phase 5A: Resonance Node Detection
  private detectResonanceNodes(particle: IParticle, particles: IParticle[]): void {
    // This will be handled in the system class with resonanceNodes array
  }

  // Phase 5B: Energy Cascade Creation
  private createEnergyCascades(particle: IParticle, currentIndex: number, particles: IParticle[]): void {
    // This will be handled in the system class with energyCascades array
  }

  // Phase 5C: Standing Wave Generation
  private generateStandingWaves(particle: IParticle, particles: IParticle[]): void {
    // This will be handled in the system class with standingWaves array
  }

  // Phase 5D: Field Interference Effects
  private applyFieldInterference(particle: IParticle, particles: IParticle[]): void {
    let interferenceForceX = 0;
    let interferenceForceY = 0;

    particles.forEach(otherParticle => {
      if (particle === otherParticle) return;

      const dx = otherParticle.x - particle.x;
      const dy = otherParticle.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 80 && distance > 0) {
        const interference = this.calculateFieldInterference(particle, otherParticle, distance);
        const forceMultiplier = interference * Constants.FIELD_INTERFERENCE_FACTOR / distance;

        interferenceForceX += (dx / distance) * forceMultiplier;
        interferenceForceY += (dy / distance) * forceMultiplier;
      }
    });

    particle.vx += interferenceForceX;
    particle.vy += interferenceForceY;
  }

  // Phase 5D: Calculate field interference
  private calculateFieldInterference(particle1: IParticle, particle2: IParticle, distance: number): number {
    let interference = 0;

    // Electric field interference
    if (particle1.type === ParticleType.ELECTRIC || particle2.type === ParticleType.ELECTRIC) {
      const charge1 = particle1.type === ParticleType.ELECTRIC ? particle1.electricCharge : 0;
      const charge2 = particle2.type === ParticleType.ELECTRIC ? particle2.electricCharge : 0;
      interference += Math.sin(distance * 0.1) * Math.abs(charge1 + charge2) * 0.5;
    }

    // Magnetic field interference
    if (particle1.type === ParticleType.MAGNETIC || particle2.type === ParticleType.MAGNETIC) {
      const phase1 = particle1.type === ParticleType.MAGNETIC ? particle1.magneticPhase : 0;
      const phase2 = particle2.type === ParticleType.MAGNETIC ? particle2.magneticPhase : 0;
      interference += Math.cos(phase1 - phase2) * 0.3;
    }

    // Gravitational field interference
    if (particle1.type === ParticleType.GRAVITATIONAL || particle2.type === ParticleType.GRAVITATIONAL) {
      const mass1 = particle1.type === ParticleType.GRAVITATIONAL ? particle1.gravitationalStrength : 0;
      const mass2 = particle2.type === ParticleType.GRAVITATIONAL ? particle2.gravitationalStrength : 0;
      interference += Math.sin(distance * 0.05) * (mass1 + mass2) * 0.2;
    }

    return interference;
  }

  private handleBoundaries(particle: IParticle, width: number, height: number): void {
    const margin = 5;

    if (particle.x < margin) {
      particle.x = margin;
      particle.vx = Math.abs(particle.vx) * 0.8;
    } else if (particle.x > width - margin) {
      particle.x = width - margin;
      particle.vx = -Math.abs(particle.vx) * 0.8;
    }

    if (particle.y < margin) {
      particle.y = margin;
      particle.vy = Math.abs(particle.vy) * 0.8;
    } else if (particle.y > height - margin) {
      particle.y = height - margin;
      particle.vy = -Math.abs(particle.vy) * 0.8;
    }
  }

  private updateVisualProperties(particle: IParticle): void {
    const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
    const baseOpacity = Math.min(0.9, 0.3 + speed * 20);
    particle.opacity = baseOpacity + particle.glowIntensity * 0.3;

    // Subtle hue shifting
    particle.hue = (particle.hue + 0.1) % 360;
  }

  private calculateDensityGlow(particles: IParticle[]): void {
    particles.forEach((particle, i) => {
      let nearbyCount = 0;
      particles.forEach((other, j) => {
        if (i !== j) {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50) {
            nearbyCount++;
          }
        }
      });

      particle.glowIntensity = Math.max(particle.glowIntensity, nearbyCount / 10);
    });
  }

  findConnections(particles: IParticle[]): void {
    particles.forEach((particle, i) => {
      particle.connections = [];
      particles.forEach((other, j) => {
        if (i !== j) {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < Constants.CONNECTION_DISTANCE) {
            particle.connections.push(j);
          }
        }
      });
    });
  }
}