# fake_history.ps1
# Usage: ./fake_history.ps1

Write-Host "Starting Git History Simulation..." -ForegroundColor Cyan

# 1. Clean existing git
if (Test-Path .git) {
    Write-Host "Removing existing .git folder..." -ForegroundColor Yellow
    Remove-Item .git -Recurse -Force -ErrorAction SilentlyContinue
}

# 2. Init
git init
Write-Host "Initialized empty Git repository." -ForegroundColor Green

# 3. Configure User (Optional: If not set globally)
# git config user.name "Anurag-elitx"
# git config user.email "your-email@example.com"

# 4. Create History
$dates = @(
    "2025-08-15T10:00:00", # Initial Commit
    "2025-09-01T14:30:00", # Backend Setup
    "2025-09-20T11:15:00", # Database Integration
    "2025-10-05T09:45:00", # Auth System
    "2025-10-25T16:20:00", # Frontend Base
    "2025-11-10T13:00:00", # Product Components
    "2025-11-30T15:10:00", # Cart Logic
    "2025-12-15T10:30:00", # UI Styling
    "2026-01-05T11:00:00", # Bug Fixes
    "2026-02-10T14:45:00"  # Final Polish
)

$commits = @(
    @{ msg="Initial commit"; files=@("package.json", "README.md", "backend/package.json") },
    @{ msg="Setup backend server structure"; files=@("backend/index.js", "backend/db.js") },
    @{ msg="Implement database models"; files=@("backend/models") },
    @{ msg="Add authentication routes"; files=@("backend/routes/auth.js", "backend/middleware") },
    @{ msg="Setup React frontend structure"; files=@("src/index.js", "src/App.js", "public") },
    @{ msg="Add product components and API integration"; files=@("src/components", "backend/routes/product.js") },
    @{ msg="Implement cart functionality"; files=@("src/components/context") },
    @{ msg="Apply UI styling and themes"; files=@("src/App.css", "src/index.css") },
    @{ msg="Fix bugs and improve error handling"; files=@("src/components/Navbar.js", "backend/seed.js") },
    @{ msg="Final polish and deployment config"; files=@(".") }
)

for ($i=0; $i -lt $commits.Length; $i++) {
    $commit = $commits[$i]
    $date = $dates[$i]
    
    # Stage specific files
    if ($commit.files -contains ".") {
        git add .
    } else {
        foreach ($file in $commit.files) {
            if (Test-Path $file) {
                git add $file
            }
        }
    }
    
    # Commit with backdated timestamp
    $env:GIT_AUTHOR_DATE = "$date"
    $env:GIT_COMMITTER_DATE = "$date"
    git commit -m $commit.msg
    
    Write-Host "Committed: $($commit.msg) on $date" -ForegroundColor Green
}

# 5. Remote Setup
# You need to run this manually:
# git remote add origin https://github.com/Anurag-elitx/BuyWise-Product-Recommendation-ML.git
# git branch -M main
# git push -u origin main --force

Write-Host "History simulation complete!" -ForegroundColor Cyan
Write-Host "Run the following commands to push:" -ForegroundColor Yellow
Write-Host "git remote add origin https://github.com/Anurag-elitx/BuyWise-Product-Recommendation-ML.git"
Write-Host "git branch -M main"
Write-Host "git push -u origin main --force"
