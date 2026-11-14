/**
 * Futuristic Web Audio Synthesizer for M AHMAD — Agentic AI
 * Zero external audio files: synthesized on-the-fly using oscillators and gain envelopes.
 * Muted by default.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambienceOsc1: OscillatorNode | null = null;
  private ambienceOsc2: OscillatorNode | null = null;
  private ambienceGain: GainNode | null = null;
  private isAmbiencePlaying: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.initCtx();
      this.playActivate();
      this.startAmbience();
    } else {
      this.stopAmbience();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Digital interface click (crisp high-tech transient)
  public playClick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // Futuristic AI activation (rising multi-harmonic chime)
  public playActivate() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73]; // A major 9th chord
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const startTime = this.ctx.currentTime + idx * 0.05;
      osc.frequency.setValueAtTime(freq * 0.5, startTime);
      osc.frequency.exponentialRampToValueAtTime(freq, startTime + 0.15);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.08 / (idx + 1), startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.8);
    });
  }

  // Deep cinematic transition (sub-bass sweep with lowpass filter)
  public playTransition() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.8);

    osc.frequency.setValueAtTime(95, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.8);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.85);
  }

  // Subtle electronic ambience
  public startAmbience() {
    if (this.isMuted || this.isAmbiencePlaying) return;
    this.initCtx();
    if (!this.ctx) return;

    this.ambienceOsc1 = this.ctx.createOscillator();
    this.ambienceOsc2 = this.ctx.createOscillator();
    this.ambienceGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    this.ambienceOsc1.type = 'sine';
    this.ambienceOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

    this.ambienceOsc2.type = 'sine';
    this.ambienceOsc2.frequency.setValueAtTime(55.6, this.ctx.currentTime); // Subtle binaural beat

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, this.ctx.currentTime);

    this.ambienceGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.ambienceGain.gain.linearRampToValueAtTime(0.035, this.ctx.currentTime + 2.5);

    this.ambienceOsc1.connect(filter);
    this.ambienceOsc2.connect(filter);
    filter.connect(this.ambienceGain);
    this.ambienceGain.connect(this.ctx.destination);

    this.ambienceOsc1.start();
    this.ambienceOsc2.start();
    this.isAmbiencePlaying = true;
  }

  public stopAmbience() {
    if (this.ambienceGain && this.ctx) {
      try {
        this.ambienceGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          this.ambienceOsc1?.stop();
          this.ambienceOsc2?.stop();
          this.ambienceOsc1?.disconnect();
          this.ambienceOsc2?.disconnect();
          this.isAmbiencePlaying = false;
        }, 500);
      } catch {
        this.isAmbiencePlaying = false;
      }
    }
  }
}

export const sound = new SoundEngine();
