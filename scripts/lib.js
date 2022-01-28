/**
 * @param {number} ms 
 * @returns {Promise<void>}
 */
export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
