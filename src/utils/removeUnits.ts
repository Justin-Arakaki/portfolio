export default function removeUnits(withUnits: unknown) {
  const coerce = String(withUnits);
  return Number(coerce.replace(/[^\d.]/g, ''));
}
