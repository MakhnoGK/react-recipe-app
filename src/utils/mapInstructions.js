export default function mapInstructions(recipe) {
  return recipe?.strInstructions
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)
}
