const logotext = "Deko";
const meta = {
  title: "Deko",
  description: "I’m Deko, a developer and photographer",
};

const introdata = {
  title: "I'm Deko",
  animated: {
    first: "I'm a software developer!",
    second: "I'm a photographer!",
    third: "I love Japanese culture!",
  },
  description: "There's no more tomorrow if you are not the one!",
  your_img_url: "https://i.imgur.com/SLPy0WT.jpg",
};

const dataabout = {
  title: "A bit about myself",
  aboutme: `Hi, I’m Deko. I’m interested in coding languages, especially Javascript. I’m currently learning NestJs and ReactJS.
    I'm recently working with: 
    Microservices - Message Queues (Kafka, Redis, ActiveMQ, RabbitMQ) |
    Design system |
    AWS services - SQS, SNS, S3, DynamoDB, EKS, ECS, EC2, Code Pipeline, Elastic Cache, Fargate, CloudWatch, Lambda |
    Database - SQL (PostgreSQL, MsSQL), NoSQL (MongoDB, ElasticSearch, Algolia) |
    Big and Complex Microservices Systems`,
};

const worktimeline = [
  {
    jobtitle: "Fullstack developer",
    where: "FPT Software",
    date: "2022 - now",
  },
  {
    jobtitle: "Backend developer",
    where: "BoostCommerce",
    date: "2022",
  },
  {
    jobtitle: "Backend developer",
    where: "Techvify Software",
    date: "2020",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "NodeJS",
    value: 85,
  },
  {
    name: "ReactJS",
    value: 80,
  },
  {
    name: "AWS Services",
    value: 70,
  },
];

const projects = [
  {
    title: "Zig-Next (CDGTaxi Corp.) | 2022 - now",
    description:
      "Work as fullstack developer, who designs and codes for control panel of cdgtaxi manners and stuffs using the modern framework NestJS with microservice architechture and almost all the services on AWS.",
  },
  {
    title: "Iboard (SSI Corp.) | 2022",
    description:
      "Work as fullstack developer, using ExpressJS and ReactJS to implement and maintain the board for trading stock of VietNam markets using on-premise data center and microservice architecture.",
  },
  {
    title: "BoostFilterSeach (BoostCommerce) | 2022",
    description:
      "Work as backend developer, using ExpressJS and NestJS to implement and maintain the filter search on BoostFilterSearch application on Shopify, using ElasticSearch and microservice architecture",
  },
  {
    title: "ESG Reporting Framework (DGX Corp.) | 2020",
    description:
      "Work as backend developer, using NestJS to create reporting framework with many global standards for industry",
  },
];

const dataportfolio = [
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329127448_5788643551242884_7125337967670662241_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=gPnyeJH-uUAAX_bt_wn&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCwx6fmtJnT3RlHfp43bq95-KwXOd65jJ2Df09h218iCQ&oe=63F10211",
    tag: "cosplay",
  },
  {
    img: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/328637597_670871478058628_4114871962334919848_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Lw3rU3LmB8oAX_UjQjQ&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAo8UEECp1zsae5orYc1ufYLXJoVNYaArRUBhe7c42KZg&oe=63F01AE2",
    tag: "cosplay",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329015004_715301456971944_5379919651841896750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=3Rs02fAqYZcAX9zU8DY&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAep7jug0VaJnbPNlTiHoiqon6vSS7ux2NHDkTszDj82g&oe=63F0B95A",
    tag: "cosplay",
  },
  {
    img: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/329804444_1248636586077086_3417100665782921230_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=M1CgGOvq7ZcAX8pYdjr&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDEOK9If4Go_0OCycWpun1s5__T3ZIiDoZjkBZRHSs11A&oe=63EFB69C",
    tag: "cosplay",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/328524848_517870613782304_3400797803991950600_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=2njlssmwFL8AX_AFHLM&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDyiLgELdsF_J6s3RiKX49ldVjorii6dmiqGmmDGM3gjQ&oe=63F0E27C",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/327210824_906827247420908_2796474453163217013_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=bILJBdpZhIoAX_v5qd3&_nc_ht=scontent.fhan15-1.fna&oh=00_AfArQ8Ik_mzpzv2xKKTvo7f7e8QzJTmVKJ52AoB-x3Sp9g&oe=63F0B067",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/327270433_3669978263229033_168044569116460921_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=xebMXzd0PckAX_4j7qT&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBBvRN6e2ac9tvUBr05mRC35HGeMW2fO7GXvxv6vKdp_Q&oe=63F0B27D",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/325883716_531282188807192_8325652573422756100_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Yz60MjdzN-UAX8V18dy&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAiR4OavKvDQsAXbTQSYMLRI5oWCniAKAi4lcJ1M6I5hQ&oe=63F08FE8",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/323772737_1585705411878451_9093732990075820801_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=qjcgVUHy41UAX_VXjmE&_nc_ht=scontent.fhan15-1.fna&oh=00_AfD5dTgcwEZVjG2lenErBDA0C-O6p3ZymAchkvE5TBqmSQ&oe=63F01F17",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/322488360_1122954341722057_7979199807287390261_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=aYR69Wv1PuIAX8xiMWl&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-1.fna&oh=00_AfACjQlyRg5lxz-8vIqg3ldApojDOOO5lbHennD4unP8PA&oe=63EF80B0",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/320729691_560442645554314_4029040667881094761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=FxYc5ZNemC0AX-oPR0P&tn=8c0sLgpg_269_ARg&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDzap_A00Tj0G-Tgj_ipCT5ik3Li69cB87qS9_GpUUsyg&oe=63EF2316",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/317773907_3320982968214005_398602190201772099_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=DnQYHUoDmssAX_MhXKb&_nc_ht=scontent.fhan15-1.fna&oh=00_AfD3-4iogJnZS3JZcfnonNBQcnOvwJXyA_g28tPBJHNFQg&oe=63F0F376",
    tag: "life",
  },
  {
    img: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329745372_578356600847028_7241895465523275130_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZgVuE9AEmxgAX_A8bro&_nc_ht=scontent.fhan15-1.fna&oh=00_AfA3xZ1Y3H8OcZ-5Txs1e2refI4zz3Np6cfq0gnaWTXFzw&oe=63EFEDB0",
    tag: "cosplay",
  },
];

const contactConfig = {
  YOUR_EMAIL: "tam.nguyen.cdt@gmail.com",
  YOUR_FONE: "(84)393488636",
  description:
    "If you have any interests in me, please leave a contact, phone or message me directly. I will appreciate!",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/deko-39",
  facebook: "https://facebook.com/Sodetsuka",
  linkedin: "https://www.linkedin.com/in/t%C3%A2m-nguy%E1%BB%85n-6a22a7209/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  projects,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
