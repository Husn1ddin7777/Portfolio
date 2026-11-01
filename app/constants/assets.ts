// 3D model loading options.
// MODEL_EXT: file extension of the model files (a host that refuses .glb can serve them under another name).
// The bundled models are Draco/Meshopt-compressed. The Draco decoder is self-hosted in public/draco/.
// A build that ships pre-decompressed models sets NEXT_PUBLIC_PLAIN_MODELS=1 to skip both decoders.
const PLAIN_MODELS = process.env.NEXT_PUBLIC_PLAIN_MODELS === '1';

export const MODEL_EXT = process.env.NEXT_PUBLIC_MODEL_EXT || 'glb';
export const DRACO_DECODER: string | false = PLAIN_MODELS ? false : 'draco/';
export const USE_MESHOPT = !PLAIN_MODELS;
