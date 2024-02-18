import Fluid from 'webgl-fluid-enhanced'

type FluidConfig = Parameters<typeof Fluid.config>[number]

export const fluidConfig: FluidConfig = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 768,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 3.6,
  VELOCITY_DISSIPATION: 0.6,
  PRESSURE: 0.5,
  PRESSURE_ITERATIONS: 20,
  CURL: 2,
  INITIAL: false,
  SPLAT_AMOUNT: 5,
  SPLAT_RADIUS: 0.35,
  SPLAT_FORCE: 6e3,
  SPLAT_KEY: '',
  SHADING: false,
  COLOR_UPDATE_SPEED: 10,
  COLOR_PALETTE: ['#FFFCE1'],
  HOVER: true,
  BACK_COLOR: '#0E100F',
  TRANSPARENT: false,
  BRIGHTNESS: 0.6,
  BLOOM: false,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.8,
  BLOOM_THRESHOLD: 0.6,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: false,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 1,
}