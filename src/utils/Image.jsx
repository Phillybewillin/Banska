// Enhanced preloadImage utility
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    // Skip if already cached
    if (typeof window !== 'undefined' && window.imageCache?.has(src)) {
      resolve();
      return;
    }
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Cache the loaded image
      if (typeof window !== 'undefined') {
        if (!window.imageCache) window.imageCache = new Set();
        window.imageCache.add(src);
      }
      resolve();
    };
    img.onerror = reject;
  });
};

// Batch preloading with concurrency control
export const preloadBatch = async (urls, batchSize = 3) => {
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.allSettled(
      batch.map(url => preloadImage(url))
    );
  }
};