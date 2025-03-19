export const DB_NAME = 'StructuredRagDB';
export const DB_VERSION = 1;

export const openIndexedDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Create stores
      if (!db.objectStoreNames.contains('embeddings')) {
        const embeddingsStore = db.createObjectStore('embeddings', { keyPath: 'id' });
        embeddingsStore.createIndex('timestamp', 'timestamp');
      }
      
      if (!db.objectStoreNames.contains('documents')) {
        const documentsStore = db.createObjectStore('documents', { keyPath: 'id' });
        documentsStore.createIndex('timestamp', 'timestamp');
      }
    };
  });
};

export const saveEmbedding = async (db, docId, embedding) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['embeddings'], 'readwrite');
    const store = transaction.objectStore('embeddings');

    const request = store.put({
      id: docId,
      embedding,
      timestamp: new Date().toISOString()
    });

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

export const loadEmbeddings = async (db) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['embeddings'], 'readonly');
    const store = transaction.objectStore('embeddings');
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
