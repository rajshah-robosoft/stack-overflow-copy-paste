export default fibonacci

/**
 * Return fibonacci series till given number
 *
 * @param {Number} endNumber - The number till you want your fibonacci series
 * @return {Object} - Array of fibonacci series
 */
function fibonacci(endNumber) {
  return Array.from({ length: endNumber }).reduce(
    (acc, _, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
    
  )
}
