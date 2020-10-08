export default interface IMatriculationProvider {
  generateMatriculation(): Promise<string>;
}
