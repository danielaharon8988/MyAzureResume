# Azure Cloud Resume Challenge
Welcome to my Cloud Resume Challenge for Azure project! ☁️

## [My Web - Click Here!](https://getresumecounterapp1.z13.web.core.windows.net)

![Diagram](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/diagram.png?raw=true)

I began by mastering the basics and earned my AZ-900 Azure Fundamentals certification. After completing the certification, I dedicated myself to the Cloud Resume Challenge for Azure.

Over the course of two intensive weekends, totaling around 30-40 hours, I devoted significant effort to this project. Whether you're an experienced professional or new to Azure, I hope my project inspires and assists you on your own cloud computing journey. Let's dive in together!


# This challenge is composed of 8 main parts:

1. Configure a Static Website via Azure Storage with a custom domain and HTTP
2. Write your resume in HTML and formatting it with CSS
3. Setup Azure Storage account and enable Static Website
4. Infrastructure as Code by using Terraform
5. Enable CDN for HTTPS access to your website and custom domain
6. Use Azure Functions App to interact with CosmosDB API to update a visitor counter
7. Write javascript to capture the result of the visitor counter function and display it on the site
8. Configure GitHub Actions for CI/CD with Azure Storage


## Prerequisites
- Azure account
- GitHub account
- Azure CLI
- Azure Functions Core Tools
- Visual Studio Code
- Visual Code Extensions
- Azure Functions Extensions
- C# Extension
- Azure Storage Extension
- A cheap domain provider 


## Front-end

### Phase 1: Building the Resume Website
I started by building a static resume website using HTML and CSS. I used a template from the internet and customized it to my needs. Here's the result:

![Static Resume Page](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AADaniel%20Aharon%20Resume%20-%20Google%20Chrome%E2%80%AC%205_30_2024%209_20_29%20PM.png?raw=true)

## Phase-2 (Hosting the website in azure)
<p>This phase is all about deploying the static site to the cloud. In Azure we can achieve this by deploying the static site to a blob storage. Azure Blob storage has an option to configure it to host static websites. Once configured you can find a container named as $web. Now you can upload the website files directly from the portal or the cli. I personally chose to do it through the cli. The image below shows you the uploaded files for the static site in the blob storage</p>

<img src="https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AA$web%20-%20Microsoft%20Azure%20-%20Google%20Chrome%E2%80%AC%205_30_2024%209_59_35%20PM.png?raw=true">
And you can access the static website through the primary endpoint given by azure for this particular site. [You can find it in the capabilites section in the overview of the Blob account and click "Static website" and find the primary and secondary endpoints], later i connected the Domain I purchased to the Static website to generate a short and accessible url.


## Phase-3 (Domain and CDN)
I bought a domain (on godaddy -  <a href="https://getresumecounterapp1.z13.web.core.windows.net"> resumedanielaharon.online</a>) for this project. 
I could have used Azure DNS but my subscription credits wasnt able to actually get a domain name. Then I pointed this domain to the Azure CDN endpoint. CDN refers to content delivery network. It is a network of multiple proxy servers with a primary goal of delivering content with high availability. So users across different geographical locations can access it faster.
  

### Phase 4: JavaScript Web App
I created a counter to keep track of page visits using JavaScript. The `main.js` function sends an HTTP request to the Azure Function to get the count and display it.

### Phase 5: Azure Functions
I created an Azure Function with an HTTP trigger to update the visitor count each time the page is loaded. The function fetches the count from Azure Cosmos DB, increments it, and returns the updated count.

![Azure Functions](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AA$web%20-%20Microsoft%20Azure%20-%20Google%20Chrome%E2%80%AC%205_30_2024%2010_06_07%20PM.png?raw=true)

### Phase 6: Azure Cosmos DB
I created a Cosmos DB to store the visitor count. I used the Table API to manage the data. This documentation helped me understand how it works.

![Cosmos DB](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AAdanielresume%20-%20Microsoft%20Azure%20-%20Google%20Chrome%E2%80%AC%205_30_2024%2010_08_28%20PM.png?raw=true)

### Phase 7: Terraform
To automate resource provisioning, I used Terraform. I imported existing resources to a state file and configured variables, storing sensitive information as environment variables.

### CI/CD
I set up a CI/CD pipeline using GitHub Actions to deploy updates to the Azure Storage container. This workflow also purges the CDN cache to reflect updates immediately.

- Followed [Microsoft's docs on using GitHub Actions to deploy a static website](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel).

![CI/CD Pipeline](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AADeploy_backend%20%C2%B7%20Workflow%20runs%20%C2%B7%20danielaharon8988_MyAzureResume%20-%20Google%20Chrome%E2%80%AC%205_30_2024%2010_10_21%20PM.png?raw=true)
![CI/CD Pipeline](https://github.com/danielaharon8988/MyAzureResume/blob/main/frontend/readmeimages/%E2%80%AADeploy_backend%20%C2%B7%20Workflow%20runs%20%C2%B7%20danielaharon8988_MyAzureResume%20-%20Google%20Chrome%E2%80%AC%205_30_2024%2010_10_09%20PM.png?raw=true)