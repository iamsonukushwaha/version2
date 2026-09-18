![image](https://user-images.githubusercontent.com/51280276/209464674-5b3e8046-956c-4faf-ac55-0a9bd678d327.png)

<br/><br/><br/>

**https://sonukushwaha.vercel.app**

<br/><br/>

### 🛠 Installation & Set Up

1. Use the compatible Node version for this Gatsby project.

   ```sh
   source /usr/local/share/nvm/nvm.sh
   nvm install 16
   nvm use 16
   node -v
   npm -v
   ```

2. Install dependencies.

   ```sh
   npm install --legacy-peer-deps --no-fund --no-audit
   ```

3. Start the development server.

   ```sh
   source /usr/local/share/nvm/nvm.sh
   nvm use 16
   npm run develop -- --host 0.0.0.0
   ```

4. If you want the default npm start script:

   ```sh
   source /usr/local/share/nvm/nvm.sh
   nvm use 16
   npm start
   ```

### 🚀 Building and Running for Production

1. Generate a full static production build.

   ```sh
   source /usr/local/share/nvm/nvm.sh
   nvm use 16
   npm run build
   ```

2. Preview the built site locally.

   ```sh
   source /usr/local/share/nvm/nvm.sh
   nvm use 16
   npm run serve
   ```

### 🔁 Commands to Run Next Time After Modifying Anything

Use these in order whenever you change code or content:

```sh
source /usr/local/share/nvm/nvm.sh
nvm use 16
npm install --legacy-peer-deps --no-fund --no-audit
npm run develop -- --host 0.0.0.0
```

If you want to validate a production build before publishing:

```sh
source /usr/local/share/nvm/nvm.sh
nvm use 16
npm run build
npm run serve
```

If you want to deploy to GitHub Pages:

```sh
source /usr/local/share/nvm/nvm.sh
nvm use 16
npm run deploy
```

> Note: This project currently requires Node 16. Using a newer Node version can cause Gatsby dependency and runtime issues during development/build.
