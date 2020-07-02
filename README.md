# Design Initiative Dashboard


### Folder structure

```
  
  1. client folder contains all the front-end related stuff.

  2. server folder contains all the backend related stuff.

```

### Server-side 

```

  1. cd config - (contains all the configuration files)
  2. cd controllers - (contains all the logic for APIs)
  3. cd models - (contains all the database schemas)
  4. cd routes - (Defined all the routes for APIs)
  5. cd tests - (contains files for unit-testing APIs)

```

### Set-up locally and run

1. Add .env file in the root directory of server

```

  MONGO_URI = '<YOUR_MONGODB_URL>'
  PORT = 5000
  NODE_ENV = 'development'

```
2. Install dependencies on server-side

```

  > cd server
   npm install

```
3. To run backend (development mode)

```
   > cd server
   npm run dev

```
4. Install dependencies on client-side

```

   > cd client
   npm install

```

5. To run frontend

```

   > cd client
   npm run start

```

6. Ports:

```

    1. Backend running on: 5000
    2. Frontend running on: 3000

```
