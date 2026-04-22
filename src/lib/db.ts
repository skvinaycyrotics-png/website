import Database from 'better-sqlite3';
import path from 'path';

// Define the path to the SQLite database file
// It will be created in the root of the project
const dbPath = path.join(process.cwd(), 'database.sqlite');

// Initialize the database connection
const db = new Database(dbPath, { verbose: console.log });

// Enable WAL mode for better concurrency and performance
db.pragma('journal_mode = WAL');

// Initialize the tables if they don't exist
function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      salutation TEXT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      countryCode TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT,
      designation TEXT,
      country TEXT NOT NULL,
      city TEXT NOT NULL,
      address TEXT,
      pincode TEXT,
      subject TEXT NOT NULL,
      department TEXT,
      projectType TEXT,
      projectLocation TEXT,
      projectBudget TEXT,
      priority TEXT,
      contactMethod TEXT,
      contactTime TEXT,
      howDidYouHear TEXT,
      nda TEXT,
      message TEXT NOT NULL,
      dataProcessingConsent TEXT NOT NULL,
      privacyPolicyConsent TEXT NOT NULL,
      newsletter TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_inquiries_createdAt ON inquiries(createdAt);
  `);
}

// Call initDb on startup
initDb();

export default db;
