export default function guardrail(mathfunction) {
  const queue = [];
  try {
    queue.push(mathfunction());
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
