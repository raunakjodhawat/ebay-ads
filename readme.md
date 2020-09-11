### To execute the project locally

Make sure you have mongo installed and running locally

create Db ebay_ads
and create collections (advertisements, logs, impressions)
make sure, nothing is running on port 8080
execute npm run start

## API endpoints
Sample API
1. Create Advertisement
POST http://localhost:8080/api/v1/ads
BODY {
    "title": "This is sample Ad1",
    "category": "shoes",
    "creator": "raunak"
}