# MNST-Record


## 👥 Team Git Guide (Beginners)

Welcome to the project! Here's a simple Git guide with explanations to help everyone collaborate smoothly.

---

### 🔁 1. Clone the Repo (First time only)
Downloads the entire project to your computer.
```bash
git clone https://github.com/ChittalaUday/MNST-Record.git
```

---

### 🌿 2. Create a Branch (To Work separately, Not necessarily needed)
Create your own branch to work without affecting the main code.
```bash
git checkout -b your-branch-name    # don't use, if you dont know about branches 
```

---

### 🧹 3. Check & Add Changes 
Check what's changed and stage your files for commit.
```bash
git status        # Show changed files
git add .         # Add all changed files
```

---

### 📝 4. Commit Changes
Save a snapshot of your work with a short message.
```bash
git commit -m "Your short message"
```

---

### 📤 5. Push to GitHub
Upload your branch and commits to GitHub.
```bash
git push origin your-branch-name   # if only a new branch is created
git push origin main               # Use this, if you don't know about branches    
```

---

### 🔄 6. Pull Latest Main Branch
Get the latest code from the main branch to stay updated.
```bash
git checkout main         # Switch to main branch
git pull origin main      # Download latest updates
```

---

### 🔀 7. Merge Main into Your Branch
Bring updates from main into your branch to avoid conflicts later.
```bash
git checkout your-branch-name
git merge main
```

---

### ⚠️ 8. Resolve Conflicts (if shown)
Sometimes two people edit the same part. Git will ask you to fix it.
- Open the file and choose which version to keep.
- Then run:
```bash
git add .
git commit -m "Fix conflict"
```

---

### ✅ 9. Create a Pull Request
Ask to merge your work into the main branch:
- Go to GitHub → Select your branch → Click “Compare & pull request”

---

💡 **Tip**: Always pull from `main` before starting work to stay in sync!

---
