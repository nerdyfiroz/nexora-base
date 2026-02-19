-- Whitelist application table
CREATE TABLE whitelist_applications (
  id SERIAL PRIMARY KEY,
  wallet_address VARCHAR(64) NOT NULL,
  tasks JSONB NOT NULL,
  status VARCHAR(16) DEFAULT 'pending', -- pending, reviewed, gtd, wl
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tasks table (admin controls tasks)
CREATE TABLE whitelist_tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description TEXT,
  required BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin table (for code access, optional)
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  code VARCHAR(64) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- GTD/WL winners table
CREATE TABLE whitelist_winners (
  id SERIAL PRIMARY KEY,
  wallet_address VARCHAR(64) NOT NULL,
  type VARCHAR(8) NOT NULL, -- gtd or wl
  created_at TIMESTAMP DEFAULT NOW()
);
