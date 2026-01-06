# Vercel Deployment Guide - MRT Project

## Prerequisites
1. A Vercel account (sign up at https://vercel.com)
2. MongoDB Atlas database (or any cloud MongoDB instance)
3. All necessary API keys (Stripe, etc.)

## Step 1: Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

## Step 2: Set Up Environment Variables in Vercel

After importing your project to Vercel, you need to add these environment variables:

### Required Environment Variables:
- `MONGO_URI` - Your MongoDB connection string
- `NODE_ENV` - Set to `production`
- `PORT` - Optional (Vercel handles this automatically)

### Cloudinary Configuration (Required for File Uploads):
Get these from https://cloudinary.com (free account):
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret

### Additional Variables (if used in your project):
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `JWT_SECRET` - JWT secret for authentication
- Any other API keys or secrets your app uses

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your GitHub repository: `ahmadshakib770/MRT-Project`
4. Vercel will auto-detect the configuration
5. Add all environment variables in the "Environment Variables" section
6. Click "Deploy"

### Option B: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? mrt-project (or your choice)
# - In which directory is your code located? ./
# - Override settings? No

# Add environment variables
vercel env add MONGO_URI
vercel env add NODE_ENV
vercel env add CLOUDINARY_CLOUD_NAME
vercel env add CLOUDINARY_API_KEY
vercel env add CLOUDINARY_API_SECRET

# Deploy to production
vercel --prod
```

## Step 4: Post-Deployment Configuration

### Set Up Cloudinary for File Uploads (Important!)

This project uses file uploads for:
- Lost & Found item photos
- Advertisement images
- Student verification documents
- Bug report screenshots
- Station hazard photos

**Cloudinary Setup (Free & Required):**
1. Create account at https://cloudinary.com (free tier: 25GB storage, 25GB bandwidth/month)
2. Get your credentials from Dashboard:
   - Cloud Name
   - API Key
   - API Secret
3. Add these to Vercel environment variables (see Step 2)

Without Cloudinary, file upload features won't work in production!

### Update CORS Settings
If you need to allow specific domains, update the CORS configuration in `server/index.js`:
```javascript
app.use(cors({
  origin: ['https://your-domain.vercel.app'],
  credentials: true
}));
```

## Step 5: Verify Deployment

Once deployed, Vercel will provide you with:
- Production URL: `https://your-project.vercel.app`
- All API routes will be available at: `https://your-project.vercel.app/api/*`

Test your endpoints:
- Frontend: `https://your-project.vercel.app`
- API: `https://your-project.vercel.app/api/users`

## Troubleshooting

### Build Errors
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### API Not Working
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check Vercel function logs

### Database Connection Issues
- Whitelist Vercel's IP addresses in MongoDB Atlas (or use 0.0.0.0/0 for all IPs)
- Verify MONGO_URI is correct

### Cloudinary/File Upload Issues
- Ensure all 3 Cloudinary environment variables are set correctly
- Check Cloudinary dashboard for usage limits
- Verify API credentials are active

## Continuous Deployment

Every push to your `main` branch on GitHub will automatically trigger a new deployment on Vercel.

## Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Monitoring
- View logs: Vercel Dashboard → Your Project → Functions
- Check analytics: Vercel Dashboard → Your Project → Analytics

---

## Quick Deployment Steps Summary:
1. ✅ Push code to GitHub (already done)
2. 🔗 Connect GitHub repo to Vercel
3. ⚙️ Add environment variables
4. 🚀 Deploy
5. ✨ Done!

Your app will be live at: `https://your-project.vercel.app`
