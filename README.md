# Official Documentation for Cloud Computing Website

_This site has been created explicitly for educational purposes._

## Requirements

- The website must be static
- The contents must be uploaded to an AWS S3 bucket
- The site must be deployed with AWS CloudFront
- One page must contain a video with a maximum length
- One page must contain an image

## Process to complete

I have some knowledge in creating small and beginner skills in web development that allowed me to upgrade my site to utilize ReactJS. This reposity has also been upgraded with GitHub Actions to utilize continous integration into my private AWS S3 bucket. Upon committing to this repository the GitHub Action runs, builds and uploads my updated site. This, in turn, utilizes AWS's CloudFront distribution where my site gets deployed globably. _I am unsure of my TTL_ because on various machines, after upload, it would take several minutes to over an hour to update. 

## Contents of the Website

The website consist of 5 pages using react router to navigate through the various pages. Each page has a modified background of the previous pages where it utilizes 3 .png images of corn dogs that move across the background through keyframes in CSS. There is also a short Sonic advertisement on the 3rd tab labeled 'AD' that is not longer than 15 seconds. 

## Completed Deployment

The link to the deployment can either be found in this repositories side bar or through this [AWS CloudFront Link](Zaqttack/cs4843-cloud-computing-website)
