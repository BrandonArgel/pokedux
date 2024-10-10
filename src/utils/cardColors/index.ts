import { pokemonTypeColors } from "@utils";

export const cardColors = (pokemonTypes: string[], percentage: number) => {
  let background = "";
  if (pokemonTypes.length > 1) {
    background = `linear-gradient(0deg, ${pokemonTypes
      .map(
        (type) =>
          pokemonTypeColors[type as keyof typeof pokemonTypeColors].color +
          percentage
      )
      .join(", ")})`;
  } else
    background =
      pokemonTypeColors[pokemonTypes[0] as keyof typeof pokemonTypeColors]
        .color + percentage;

  return {
    background,
    color:
      pokemonTypeColors[pokemonTypes[0] as keyof typeof pokemonTypeColors]
        .color,
  };
};
