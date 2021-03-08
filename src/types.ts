export interface IGotchi {
  tokenId: number;
  name: string;
  status: number;
  numericTraits: {
    energy: number;
    aggression: number;
    spookiness: number;
    brainSize: number;
    eyeShape: number;
    eyeColor: number;
  }[];
  kinship: number;
  lastInteracted: number;
  level: number;
  rarityScore: number;
}