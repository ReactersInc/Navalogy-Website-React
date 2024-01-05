import { ICONS } from "./constants/icons";
import { IMAGES } from "./constants/images";

const publications = [
    {
        id: 1,
        title: `Preserving flow table integrity in OpenFlow networks through smart contract`,
        subTitle: 'Cluster Computing',
        description: `Software-Defined Networking (SDN) has transformed network management by introducing a centralized controller that simplifies network configuration. This separation of the control plane from the forwarding devices, while enhancing flexibility, also exposes vulnerabilities that can be exploited by adversaries to manipulate flow rules on SDN switc...`,
        image: "",
        icon: ICONS.icon_1,
        publicationLink: `https://link.springer.com/article/10.1007/s10586-023-04196-3`,
        publicationDate: `2023/11/29`,

    },

    {
        id: 2,
        title: `Performances of M2M Protocols in Internet of Medical Things" Accepted in IEEE WS16 ICC'2023 Workshop - SIGNIS`,
        subTitle: '2023 IEEE International Conference on Communications Workshops (ICC Workshops)',
        description: `The Internet of Medical Things (IoMT) is a constantly developing idea that aims to connect the medical IoT devices used in the healthcare industry. IoMT devices use their environment to detect, collect and send vital information about the medical parameters of a user/patient. This data can be then used for health monitoring of patients remotely ...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10283663/`,
        publicationDate: `2023/05/28`,

    },

    {
        id: 3,
        title: `A Blockchain-Assisted Authentication for SDN-IoT Network Using Smart Contract`,
        subTitle: '2023 4th International Conference on Computing and Communication Systems (I3CS)',
        description: `The Internet of Things (IoT) is a rapidly growing technology due to the demand for automation in various industries, such as healthcare, manufacturing, and home automation etc. As IoT devices continue to proliferate, authentication and access control remain a major challenge. By verifying the identity of the device and the user, authentication h...`,
        image: "",
        icon: ICONS.icon_1,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10127386/`,
        publicationDate: `2023/03/16`,

    },

    {
        id: 4,
        // title: `"iRASA: Fog Scheduling With Congregation of MVO and PSO" in IEEE I3CS-2023 Awarded 2nd Prize Under Best Paper Category in I3CS-2023`,
        title: `iRASA: Fog Scheduling With Congregation of MVO and PSO`,
        subTitle: '2023 4th International Conference on Computing and Communication Systems (I3CS)',
        description: `Internet of Things (IoT) can be most accurately conceptualized as a network connecting billions of individual transmission entities all ready to either share or receive data in any and all plausible situations. Among the prevalent implementations in the networking genre of IoT include cloud, fog, and edge computing models. Although each pair has...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10127339/`,
        publicationDate: `2023/03/16`
    },

    {
        id: 5,
        title: `A Radio Frequency-Based Energy Harvesting Model for IoMT Device`,
        subTitle: 'International Conference on Information Technology',
        description: `The Internet of Medical Things (IoMT), also known as Smart Healthcare, has seen incredible progress in the Smart Environment industry. A significant part of Industry 4.0 is Healthcare 4.0, which is transforming the medical industry to monitor patient's health remotely and perform other health-related activities. The IoMT includes many wearable s...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://link.springer.com/chapter/10.1007/978-981-99-5997-6_1`,
        publicationDate: `2023/03/02`
    },

    {
        id: 6,
        title: `Health condition prediction and covid risk detection using healthcare 4.0 techniques`,
        subTitle: 'Smart Health',
        description: `Healthcare 4.0 is one of the emerging concepts that has grabbed the interest among researchers as well as the medical sector. Using the Internet of Things (IoT) and sophisticated communication technologies, it is now possible to monitor the patient from a remote area. In this paper, we design a remote health monitoring system using IoT and Machi...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://www.sciencedirect.com/science/article/pii/S2352648322000563`,
        publicationDate: `2022/12/01`
    },

    {
        id: 7,
        title: `Throughput prediction in smart healthcare network using machine learning approaches`,
        subTitle: '2022 IEEE 19th India Council International Conference (INDICON)',
        description: `Modern-day healthcare is being challenged by the critical nature of traffic requirements for services like health monitoring, remote consultations, and robotic surgery. While the existing literature addresses various algorithms for real-world throughput prediction, there is a lack of systematic exploration of these algorithms in healthcare. In t...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/10040160/`,
        publicationDate: `2022/11/24`
    },

    {
        id: 8,
        title: `Resource aware fog based remote health monitoring system`,
        subTitle: 'IEEE INFOCOM 2022-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)',
        description: `In today's world of medical science, remote patient monitoring devices are becoming more important and a future need particularly in the present COVID-19 situation as individuals are preferred to be kept isolated. Patients would be benefited from a suitable monitoring system that measures their important medical parameters such as pulse rate, ox...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9798058/`,
        publicationDate: `2022/5/2`
    },

    {
        id: 9,
        title: `Health monitoring in Internet of Medical Things (IoMT) using machine learning (ML) approaches`,
        subTitle: '2021 IEEE Globecom Workshops (GC Wkshps)',
        description: `In today's world, the Internet of Medical Things (IoMT) is a term that is catching the attention of many researchers. IoMT is used to exchange data between IoT enabled medical sensors and other smart devices for the purpose of healthcare. In this paper, existing machine learning (ML) techniques and models are used to monitor and predict the heal...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9682039/`,
        publicationDate: `2021/12/7`
    },

    {
        id: 10,
        title: `Openhealthq: Openflow based qos management of healthcare data in a software-defined fog environment`,
        subTitle: 'ICC 2021-IEEE International Conference on Communications',
        description: `With the incorporation of Internet of Things (IoT) in healthcare systems immense new possibilities have emerged in the modern healthcare services. In recent times where people around the globe are suffering from the Covid-19 pandemic, providing remote healthcare services maintaining necessary social distancing through e-Healthcare has become an ...`,
        image: "",
        icon: ICONS.icon_2,
        publicationLink: `https://ieeexplore.ieee.org/abstract/document/9500637/`,
        publicationDate: `2021/6/14`
    },
];



const projects = {

    0: {
        id: 0,
        type: "SDN",
        title: `Dynamic Network Orchestrator`,
        image: IMAGES.at_ovs,
        short_description: `The Dynamic Network Orchestrator is a Software-Defined Networking (SDN) solution that redefines network management. 
        This project introduces flexibility, automation, and centralized control, revolutionizing the way networks are configured and operated.`,

        long_description: [
            {
                title: "Centralized Control",
                desc: `With SDN principles, the Dynamic Network Orchestrator centralizes control, allowing administrators to dynamically manage network resources and traffic flow.`,
                img: IMAGES.project_desc_1,
            },

            {
                title: "Automated Configuration",
                desc: `Automation plays a key role in this project, enabling automatic configuration and optimization of network components, leading to improved efficiency.`,
                img: IMAGES.project_desc_2,
            },

            {
                title: "Adaptive Routing",
                desc: `Implementing adaptive routing algorithms, this SDN solution intelligently adapts to changing network conditions, ensuring optimal performance and resource utilization.`,
                img: IMAGES.project_desc_3,
            },

            {
                title: "Advanced Traffic Analysis",
                desc: `The Dynamic Network Orchestrator includes advanced traffic analysis tools, providing insights into network behavior and facilitating informed decision-making.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    1: {
        id: 1,
        type: "Cloud/Fog",
        title: `Smart Cloud Hub`,
        image: IMAGES.fog,
        short_description: `The Smart Cloud Hub is a groundbreaking project that leverages cloud and fog computing to enhance data processing and storage capabilities. 
        This innovative solution ensures seamless connectivity, real-time data analysis, and efficient resource management for diverse applications.`,

        long_description: [
            {
                title: "Cloud Computing",
                desc: `Utilizing advanced cloud computing technologies, the Smart Cloud Hub offers scalable and on-demand resources, enabling robust data storage and processing.`,
                img: IMAGES.project_desc_1,
            },

            {
                title: "Fog Computing",
                desc: `Incorporating fog computing at the edge, this project minimizes latency and optimizes data processing by distributing computing tasks closer to the data source.`,
                img: IMAGES.project_desc_2,
            },

            {
                title: "Security Measures",
                desc: `To ensure data integrity and confidentiality, the Smart Cloud Hub implements state-of-the-art security measures, making it a reliable solution for sensitive applications.`,
                img: IMAGES.project_desc_3,
            },

            {
                title: "Scalability and Flexibility",
                desc: `Designed for scalability and flexibility, the Smart Cloud Hub adapts to varying workloads and application demands, providing a versatile cloud and fog computing solution.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    2: {
        id: 2,
        type: "Hardware",
        title: `Smart Wearable Health Monitor`,
        image: IMAGES.full_glove,
        short_description: `The Smart Wearable Health Monitor is an advanced hardware project designed to provide real-time health tracking and monitoring. 
        This wearable device seamlessly integrates sensors and connectivity to empower users with insights into their well-being.`,

        long_description: [
            {
                title: "Health Tracking",
                desc: `Equipped with a variety of sensors, the Smart Wearable Health Monitor tracks vital signs, physical activity, and sleep patterns, promoting a holistic approach to health monitoring.`,
                img: IMAGES.project_desc_1,
            },

            {
                title: "Wireless Connectivity",
                desc: `With wireless connectivity features, users can sync and view their health data on mobile devices, fostering proactive health management and timely interventions.`,
                img: IMAGES.project_desc_2,
            },

            {
                title: "User-Friendly Interface",
                desc: `The device boasts a user-friendly interface, making it easy for individuals to access and interpret their health data, encouraging a more informed and healthier lifestyle.`,
                img: IMAGES.project_desc_3,
            },

            {
                title: "Long Battery Life",
                desc: `Designed for extended use, the Smart Wearable Health Monitor features a long-lasting battery, ensuring continuous health monitoring without frequent recharging.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    3: {
        id: 3,
        type: "Hardware",
        title: `Smart MediGlove`,
        image: IMAGES.app_iomt,
        short_description: `The Smart Medi-Glove is an innovative Internet of Things (IoT) project designed to revolutionize the healthcare industry, 
        specifically in the field of medical examinations and diagnostics.This advanced medical glove seamlessly integrates cutting-edge 
        hardware technology to providereal-time data and insights, enhancing the efficiency and accuracy of medical procedures.`,

        long_description: [
            {
                title: "Biometric Sensing",
                desc: `Embedded sensors in the glove monitor vital signs such as heart rate, temperature, and blood pressure, providing instant health assessments during patient examinations.`,
                img: IMAGES.project_desc_1,
            },

            {
                title: "Wireless Connectivity",
                desc: `Integrated gesture recognition technology allows for intuitive and hands-free control of connected devices and medical equipment, enhancing the overall user experience for healthcare professionals.`,
                img: IMAGES.project_desc_2,
            },

            {
                title: "Biometric Sensing",
                desc: `Embedded sensors in the glove 
                monitor vital signs such as heart rate, temperature, and blood pressure, providing instant health assessments during patient examinations.`,
                img: IMAGES.project_desc_3,
            },

            {
                title: "Gesture Recognition ",
                desc: `Integrated gesture recognition technology allows for intuitive and hands-free control of connected devices and medical equipment, enhancing the overall user experience for healthcare professionals.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },
};


const members = {

    mentors: {
        // Dr Nabajyoti Medhi
        0: {
            id: 0,
            img: IMAGES.n_medhi,
            name: "Dr. Nabajyoti Medhi",
            role: "Assistant Professor | Tezpur University",
            bio: "Dr. Nabajyoti Medhi is an Assistant Professor at Tezpur University. His research interests include Software Defined Networking, Network Function Virtualization, and Cloud Computing.",
            socialLinks: [
                {
                    url: "https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en",
                    icon: ICONS.googleScholar,
                },
                {
                    url: "https://www.linkedin.com/in/nabajyoti-medhi-226421249",
                    icon: ICONS.linkedln_2,
                }

            ],
        },
    },

    currentScholars: {

        // Birlang Bargayary
        0: {
            id: 0,
            img: IMAGES.birlang,
            name: "Birlang Bargayary",
            role: "PhD Scholar | Tezpur University",
            bio: "Birlang Bargayary is a PhD Scholar at Tezpur University. His research interests include Software Defined Networking, Network Function Virtualization, and Cloud Computing.",
            socialLinks: [
                {
                    url: "https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en",
                    icon: ICONS.googleScholar,
                },
                {
                    url: "https://www.linkedin.com/in/birglang-bargayary-b0a7a9118/",
                    icon: ICONS.linkedln_2,
                }
            ],
        },

        // Priyanka Bardoloi
        1: {
            id: 1,
            img: IMAGES.priyanka,
            name: "Priyanka Bardoloi",
            role: "PhD Scholar | Tezpur University | Principal Engineer, Starhub",
            bio: "Priyanka Bardoloi is a Principal Engineer at Starhub, Singapore. She is currently pursuing her PhD in the Department of Computer Science and Engineering, Tezpur University. Her research interests include Software Defined Networking, Network Function Virtualization, and Cloud Computing.",
            socialLinks: [
                {
                    url: "https://scholar.google.com/citations?user=Qq6XheAAAAAJ&hl=en",
                    icon: ICONS.googleScholar,
                },
                {
                    url: "https://www.linkedin.com/in/priyankabardalai/",
                    icon: ICONS.linkedln_2,
                }
            ],
        },

    },

    foundingMembers: {

        // Name : Adittya Dey
        0: {
            id: 0,
            img: IMAGES.aditya,
            name: "Adittya Dey ",
            role: "SDE II Velocity",
            bio: "Adittya Dey is a Software Development Engineer II at Velocity, India. He is a former Research Associate at Tezpur University. He has been awarded the 3rd highest package in the CSE Department of Tezpur University.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/adittyadey", icon: ICONS.linkedln_2 }
            ]
        },

        // Name : Dilwar Hussain Barbhuiya
        1: {
            id: 1,
            img: IMAGES.dilwar,
            name: "Dilwar Hussain Barbhuiya",
            role: "PhD Scholar | Tezpur University",
            bio: "Dilwar Hussain Barbhuiya, a dedicated PhD Scholar hailing from Tezpur University, brings a profound understanding of his field to the academic community. With prior experience and a strong foundation in research, Dilwar is committed to advancing knowledge and contributing to the scholarly landscape.",
            socialLinks: [
                { url: "https://www.linkedin.com/in/dilwar-barbhuiya", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Kumarjit Ray
        2: {
            id: 2,
            img: IMAGES.kumarjit,
            name: "Kumarjit Ray",
            role: "PhD Scholar | IIT Kharagpur | Former Asst. Prof. Siksha O Anusandhan",
            bio: "Kumarjit Ray, a diligent PhD Scholar from IIT Kharagpur, brings a wealth of knowledge to the team. With a background as a former Assistant Professor at Siksha O Anusandhan, Kumarjit is passionate about research and academic exploration.",
            socialLinks: [
                { url: "https://kumarjitray.github.io/", icon: ICONS.github },
            ]
        },

        // Name : Kunal das
        3: {
            id: 3,
            img: IMAGES.kunal,
            name: "Kunal Das",
            role: "Intern | ex-IQVIA",
            bio: "Kunal Das is a former intern at IQVIA. He is celebrated as the Best Btech Project of year 2022 from the ECE Department of Tezpur University.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/kunal-das-131158185", icon: ICONS.linkedln_2 }
            ]
        },

        // Name : Rajdeep Ghosh
        4: {
            id: 4,
            img: IMAGES.rajdeep,
            name: "Rajdeep Ghosh",
            role: "M.Tech CSE | Calcutta University",
            bio: "Rajdeep Ghosh holds an M.Tech in Computer Science from Calcutta University and is celebrated as the Best Graduate of Tezpur University from the class of 2022. With a passion for excellence, Rajdeep brings a wealth of knowledge to the team.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/rajdeep-ghosh-301082175", icon: ICONS.linkedln_2 }
            ]
        },
    },

    currentMembers: {

        // Name : Antara Singhal
        0: {
            id: 0,
            img: IMAGES.antara,
            name: "Antara Singhal",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Antara Singhal, a fourth-year B.Tech student specializing in Computer Science and Engineering at Tezpur University, combines a strong academic foundation with a fervor for technology. With a focus on innovation and problem-solving, Antara is well-positioned to make meaningful contributions to the ever-evolving field of computer science.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/antara-singhal",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Arindom Aich
        1: {
            id: 1,
            img: IMAGES.arindom,
            name: "Arindom Aich",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Arindom Aich, a dedicated fourth-year B.Tech CSE student at Tezpur University, combines academic prowess with a passion for technology. Positioned at the intersection of learning and innovation, Arindom is poised for impactful contributions in the field of computer science.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/arindomaich",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Bhargab Pratim Nath
        2: {
            id: 2,
            img: IMAGES.bhargab,
            name: "Bhargab Pratim Nath",
            role: "B.Tech 3rd Year ECE | Tezpur University",
            bio: "Bhargab Pratim Nath, a third-year ECE student at Tezpur University, is passionate about electronics and communication engineering, combining academic excellence with a forward-looking approach.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/bhargab-pratim-nath-a777b3216S",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Chandrima Paul
        3: {
            id: 3,
            img: IMAGES.chandrima,
            name: "Chandrima Paul",
            role: "B.Tech 3rd Year CSE | Tezpur University",
            bio: "Chandrima Paul,  B.Tech student in the Department of Computer Science and Engineering, excels in Cloud Computing, NLP, and Cyber Security. With a strong skill set, she spearheads the design aspect of the society, showcasing expertise in implementing cutting-edge technologies.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/chandrima-p-71b452228/",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Dhritideepa Sarania
        4: {
            id: 4,
            img: IMAGES.dhritideepa,
            name: "Dhritideepa Sarania",
            role: "B.Tech 3rd Year CSE | Tezpur University",
            bio: "Passionate Frontend Developer creating responsive web applications and Creative UX/UI Designer specializing in intuitive user-centric interfaces.",
            socialLinks: [
                { 
                    url: "https://github.com/dee-sarania", 
                    icon: ICONS.github
                },
                { 
                    url: "https://www.linkedin.com/in/dhritideepa-sarania-761b40250", 
                    icon: ICONS.linkedln_2 
                },
            ]
        },

        // Name : Kumarjit Ray
        5: {
            id: 5,
            img: IMAGES.kumarjit,
            name: "Kumarjit Ray",
            role: "PhD Scholar | IIT Kharagpur | Former Asst. Prof. Siksha O Anusandhan",
            bio: "Kumarjit Ray, a diligent PhD Scholar from IIT Kharagpur, brings a wealth of knowledge to the team. With a background as a former Assistant Professor at Siksha O Anusandhan, Kumarjit is passionate about research and academic exploration.",
            socialLinks: [
                {
                    url: "https://in.linkedin.com/in/kumarjit1997",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : PraptiPriya Phukon
        6: {
            id: 6,
            img: IMAGES.praptipriya,
            name: "PraptiPriya Phukon",
            role: "B.Tech 3rd Year CSE | Tezpur University",
            bio: "Versatile CSE undergrad skilled in React, computer networks, databases, and full-stack development. Dedicated to crafting innovative solutions and staying current with the latest tech trends. Eager to contribute and adapt to evolving challenges in the field.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/praptipriya-phukon-07a83b223",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Pratik Chanda
        7: {
            id: 7,
            img: IMAGES.pratik,
            name: "Pratik Chanda",
            role: "B.Tech 4th Year EE | Tezpur University",
            bio: "Pratim Chanda, currently in the fourth year of his B.Tech in Electrical Engineering at Tezpur University, showcases a strong dedication to academic excellence and a passion for electrical systems. With a keen interest in exploring innovative solutions within the realm of electrical engineering, Pratim is poised to make valuable contributions to the field.",
            socialLinks: [
                {
                    url: "https://in.linkedin.com/in/pratik-chanda-a498aa214",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Pritindra Das
        8: {
            id: 8,
            img: IMAGES.pritindra,
            name: "Pritindra Das",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Pritinda Das, a dynamic individual, holds a degree in B.Tech Computer Science and Engineering from Tezpur University. Armed with a solid foundation in CSE, Pritinda is well-prepared to navigate the tech industry, bringing a blend of academic excellence and practical skills to any professional endeavor.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/pritindra-das", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Rajdeep Ghosh
        9: {
            id: 9,
            img: IMAGES.rajdeep,
            name: "Rajdeep Ghosh",
            role: "M.Tech CSE | Calcutta University",
            bio: "Rajdeep Ghosh holds an M.Tech in Computer Science from Calcutta University and is celebrated as the Best Graduate of Tezpur University from the class of 2022. With a passion for excellence, Rajdeep brings a wealth of knowledge to the team.",
            socialLinks: [
                {
                    url: "https://in.linkedin.com/in/rajdeep-ghosh-301082175",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Rajveer Chaudhary
        10: {
            id: 10,
            img: IMAGES.rajveer,
            name: "Rajveer Chaudhary",
            role: "BTech CSE 3rd year | Tezpur University",
            bio: "Rajveer Chaudhary is a seasoned full-stack developer, specializing in Angular. With proficiency in both frontend and backend technologies, he crafts high-quality, dynamic web applications that prioritize a seamless user experience. Committed to staying current with evolving web development trends, Rajveer ensures his solutions are at the forefront of industry standards.",
            socialLinks: [
                {
                    url: "https://github.com/Rajveer6000",
                    icon: ICONS.github,
                },
                {
                    url: "https://www.linkedin.com/in/RajveerChoudhary/",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Tanushree Das
        11: {
            id: 11,
            img: IMAGES.tanushree,
            name: "Tanushree Das",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Tanushree Das, a fourth-year B.Tech CSE student at Tezpur University, blends a robust academic background with a passion for technology and innovation, ready to make impactful contributions to the field.",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/tanushree-das-80a927209",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Tridib Lochan Dutta
        12: {
            id: 12,
            img: IMAGES.tridib,
            name: "Tridib Lochan Dutta",
            role: "B.Tech 3rd Year ECE | Tezpur University",
            bio: "Tridib Lochan Dutta is a diligent B.Tech student at Tezpur University.",
            socialLinks: [
                { url: "https://www.linkedin.com/in/tridib-lochan-dutta/", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Vicky Deka
        13: {
            id: 13,
            img: IMAGES.vicky,
            name: "Vicky Deka",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Vicky Deka is a diligent B.Tech student at Tezpur University.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/vickydeka", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Vivek
        13: {
            id: 13,
            img: IMAGES.vivek,
            name: "Vivek Rai",
            role: "B.Tech 3rd Year CSE | Tezpur University",
            bio: "Angular Full-stack developer creating dynamic, responsive web applications with a commitment to high-quality solutions.",
            socialLinks: [
                { 
                    url: "https://github.com/vivekrai9900", 
                    icon: ICONS.linkedln_2 
                },
            ]
        },

    },

    pastMembers: {

        // Name : Debangee Goswami
        0: {
            id: 0,
            img: IMAGES.debangee,
            name: "Debangee Goswami",
            role: "B.Tech EE 4th Year | Tezpur University ",
            bio: "Debangee Goswami is a diligent B.Tech student at Tezpur University. Her research interests include Software Defined Networking, Network Function Virtualization, and Cloud Computing.",
            socialLinks: [
                { url: "https://www.linkedin.com/in/debangee-goswami-601577222", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Deekshith Kumar
        1: {
            id: 1,
            img: IMAGES.deekshith,
            name: "Deekshith Kumar",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Deekshith Kumar, a fourth-year B.Tech student in Computer Science and Engineering at Tezpur University, brings a wealth of academic experience and technical acumen to the table. With a focus on innovation and problem-solving, Deekshith is dedicated to contributing valuable insights and solutions within the realm of computer science",
            socialLinks: [
                {
                    url: "https://www.linkedin.com/in/yerramdeekshithkumar/",
                    icon: ICONS.linkedln_2,
                },
            ],
        },

        // Name : Dibyaroop Das
        2: {
            id: 2,
            img: IMAGES.dibya,
            name: "Dibyaroop Das",
            role: "B.Tech 4th Year CSE | Tezpur University",
            bio: "Dibyaroop Das is a diligent B.Tech student at Tezpur University.",
            socialLinks: [
                { url: "https://in.linkedin.com/in/dibyaroop-das-8803a41a4", icon: ICONS.linkedln_2 },
            ]
        },

        // Name : Prabhatangshu Phukan
        3: {
            id: 3,
            img: IMAGES.prabhat,
            name: "Prabhatangshu Phukan",
            role: "B.Tech EE 4th Year | Tezpur University ",
            bio: "Prabhatangshu Phukan is a diligent B.Tech student at Tezpur University.",
            socialLinks: [
                { url: "https://www.linkedin.com/in/prabhatangshu-phukan", icon: ICONS.linkedln_2 },
            ]
        },

    },
};




export { publications, projects, members };