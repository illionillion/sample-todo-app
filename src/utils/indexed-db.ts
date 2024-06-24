const DB_NAME = "todoDB";
const STORE_NAME = "todos";
const DB_VERSION = 1;

interface Todo {
  id?: number;
  name: string;
}

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = function (this: IDBOpenDBRequest) {
      const db = this.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = (event: Event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onerror = (event: Event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
};

const addTodo = async (todo: Todo): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.add(todo);
};

const getTodos = async (): Promise<Todo[]> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readonly");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = (event: Event) => {
      console.log((event.target as IDBRequest).result);

      resolve((event.target as IDBRequest).result);
    };

    request.onerror = (event: Event) => {
      reject((event.target as IDBRequest).error);
    };
  });
};

const clearTodos = async (): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.clear();
};

export { addTodo, getTodos, clearTodos };
