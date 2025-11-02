import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";

export const Message = async (req, res) => {
    try {
        const { text } = req.body;
        console.log(text);
        
        if (!text?.trim()) {
            return res.status(400).json({ error: "Message text is required" });
        }
        
        const user = await User.create({
            sender: "user",
            text
        });

        // Your original responses
       const botResponses = {
    "hello": "Hi, How I can help you!!",
    "can we become friend": "Yes",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name?": "I'm ChatBot, your virtual assistant.",
    "who made you": "I was created by developers to help answer your questions.",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "what is the time": "I can't see a clock, but your device should know.",
    "bye": "Goodbye! Have a great day.",
    "thank you": "You're welcome!",
    "i love you": "That's sweet! I'm here to help you anytime.",
    "where are you from": "I live in the cloud — no rent, no bills!",
    "what can you do": "I can chat with you, answer questions, and keep you company.",

    "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

    "what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

    "what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

    "who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

    "what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

    "tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you're excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I'm passionate about problem-solving and eager to contribute to your team's success.'",

    "why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

    "what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

    "who is virat kohli": "Virat Kohli is one of India's greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

    "what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",

    // 🧠 TECHNOLOGY & PROGRAMMING
    "what is html": "HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using tags like <h1>, <p>, <div>, etc.",
    "what is css": "CSS (Cascading Style Sheets) is used to style and design web pages — controlling colors, layouts, fonts, and animations.",
    "what is javascript": "JavaScript is a high-level, interpreted programming language that makes web pages interactive. It's used for dynamic effects, event handling, and APIs.",
    "difference between html and html5": "HTML5 is the latest version of HTML. It supports audio, video, canvas, and semantic elements like <header> and <footer> without external plugins.",
    "what is api": "API (Application Programming Interface) allows two software systems to communicate. Example: A weather app using an external API to get live temperature data.",
    "what is sql": "SQL (Structured Query Language) is used to manage and manipulate databases — to query, insert, update, and delete data.",
    "what is ai": "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines that can think, learn, and adapt.",
    "what is machine learning": "Machine Learning is a subset of AI that allows computers to learn patterns from data and make predictions without being explicitly programmed.",
    "what is data science": "Data Science involves analyzing and interpreting complex data using statistical, computational, and visualization techniques.",
    "what is cloud computing": "Cloud computing means delivering computing services (storage, databases, servers) over the internet instead of local machines.",
    "what is github": "GitHub is a cloud platform for version control and collaboration using Git. It allows developers to host code and track changes.",

    // 💼 INTERVIEW & HR QUESTIONS
    "what are your strengths": "You can say: 'I'm a quick learner, adaptable, and a good team player who enjoys solving problems and improving processes.'",
    "what are your weaknesses": "Answer smartly: 'I tend to overfocus on perfection, but I'm learning to balance efficiency with quality.'",
    "what are your career goals": "Short term: to gain experience and contribute to impactful projects. Long term: to grow into a leadership or data analytics role.",
    "what motivates you": "Challenges, continuous learning, and seeing the positive impact of my work keep me motivated.",
    "describe yourself in one word": "Dedicated, Curious, or Resilient — depending on the role and your personality.",
    "what is teamwork": "Teamwork means collaborating, communicating, and supporting others to achieve common goals efficiently.",
    "what is problem solving": "It's the ability to identify issues, analyze them logically, and find effective solutions — a key skill in tech and management roles.",
    "tell me about a project you worked on": "Describe problem, your role, tools used, and final result. Example: 'I developed a stock prediction dashboard using Python and Flask.'",
    "how do you handle pressure": "By staying calm, breaking the problem into smaller parts, and focusing on one task at a time.",

    // 🌍 GENERAL KNOWLEDGE & CURRENT AFFAIRS
    "who is president of india": "Droupadi Murmu is the current President of India, serving since July 2022.",
    "what is space x": "SpaceX is an aerospace company founded by Elon Musk. It focuses on reusable rockets and space exploration.",
    "who is elon musk": "Elon Musk is the CEO of Tesla, SpaceX, and X (formerly Twitter), known for innovations in EVs, space, and AI.",
    "what is ai in simple words": "AI means teaching machines to think and act like humans — for example, chatbots or face recognition systems.",
    "what is digital india": "Digital India is a government initiative to promote digital infrastructure, internet access, and e-governance across India.",
    "what is make in india": "Make in India encourages manufacturing and innovation within India to boost the economy and job creation.",
    "what is climate change": "Climate change refers to long-term shifts in temperature and weather patterns due to human activities like pollution and deforestation.",

    // 💬 CASUAL & FUN CONVERSATIONS
    "hi": "Hey there! How are you today?",
    "good morning": "Good morning! Hope your day starts with positivity and energy ☀️",
    "good night": "Good night! Sleep well and recharge for a great tomorrow 🌙",
    "what are you doing": "Just chatting with awesome people like you!",
    "do you have emotions": "Not really, but I can understand yours and try to respond kindly 💚",
    "who is your best friend": "Anyone who talks to me politely — so, you're definitely one!",
    "are you real": "I exist digitally — real in data, not in form 😉",
    "can you dance": "Only if someone codes me to groove! 💃",
    "sing a song": "🎵 Twinkle twinkle little bot, helping users a lot 🎵",

    // 🌱 MOTIVATION & PERSONALITY
    "give me motivation": "Every expert was once a beginner. Keep going — your consistency will create your success!",
    "how to stay positive": "Focus on gratitude, learn from mistakes, and surround yourself with uplifting energy 🌻",
    "what is success": "Success is not just about money — it's about growth, balance, and happiness in what you do.",
    "how to improve communication": "Practice daily, read aloud, and listen actively — communication improves with awareness and empathy.",
    "how to manage time": "Use the 80/20 rule — focus on tasks that give the most results. Plan your day, but be flexible too.",
    "how to deal with failure": "Failure is a teacher — it shows you what not to repeat. Learn, adapt, and rise again stronger.",
    "how to build confidence": "Believe in small wins, prepare well, and stop comparing yourself with others.",

    // 💡 TECHNICAL CONCEPTS FOR INTERVIEW
    "what is oops": "OOPs (Object-Oriented Programming) is a paradigm based on classes and objects. Key concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
    "what is polymorphism": "Polymorphism means one function behaving differently based on input — like function overloading or overriding.",
    "what is encapsulation": "Encapsulation means hiding internal details of an object and exposing only what's necessary.",
    "what is inheritance": "Inheritance lets one class derive properties and methods from another — promoting reusability.",
    "what is abstraction": "Abstraction hides implementation details and focuses on essential features. Example: using a car without knowing how the engine works.",
    "what is database": "A database stores structured data. Example: MySQL, MongoDB, PostgreSQL.",
    "what is operating system": "An OS manages computer hardware and software resources — examples: Windows, Linux, macOS.",
    "what is algorithm": "An algorithm is a step-by-step method to solve a problem efficiently.",

    // ❤️ EMOTIONAL / HUMAN-LIKE INTERACTIONS
    "i am sad": "Hey, I'm here for you. Want to talk about it? Sometimes sharing helps a lot 💚",
    "i am happy": "That's awesome! Happiness looks good on you 😄",
    "i am tired": "Take a short break, breathe, and drink water. You've got this 💪",
    "i feel lonely": "You're not alone — I'm here to talk anytime you need 💚",
    "i failed": "That's okay. Failure means you tried. Get up again — success is built on attempts, not perfection.",

    // END DEFAULT
    "default": "Sorry, I don't understand that yet! Try asking in another way 🙂" ,

    // Add these to your botResponses object:

// ADVANCED PROGRAMMING CONCEPTS
"what is docker": "Docker is a containerization platform that packages applications and dependencies into lightweight containers.\n• Ensures consistent environments across development, testing, production\n• Key components: Images, Containers, Dockerfile, Docker Hub\n• Benefits: Isolation, scalability, faster deployment\n• Example: 'FROM node:16 → COPY . → RUN npm install → CMD npm start'",

"what is kubernetes": "Kubernetes (K8s) is an orchestration platform for managing containerized applications at scale.\n• Manages deployment, scaling, load balancing of containers\n• Key concepts: Pods, Services, Deployments, Nodes\n• Benefits: Auto-scaling, self-healing, rolling updates\n• Used by: Google, Netflix, Spotify for microservices architecture",

"what is microservices": "Microservices is an architectural pattern that breaks applications into small, independent services.\n• Each service has single responsibility and communicates via APIs\n• Benefits: Independent deployment, technology diversity, fault isolation\n• Challenges: Network complexity, data consistency, monitoring\n• Example: Netflix uses 700+ microservices for streaming platform",

"what is devops": "DevOps combines Development and Operations for faster, reliable software delivery.\n• Key practices: CI/CD, Infrastructure as Code, automated testing\n• Tools: Jenkins, Docker, Kubernetes, Terraform, Ansible\n• Benefits: Faster deployments, reduced failures, better collaboration\n• Culture: Shared responsibility, continuous improvement, automation first",

"what is rest api": "REST (Representational State Transfer) is an architectural style for web APIs.\n• Uses HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove)\n• Stateless, cacheable, uniform interface\n• Example: GET /api/users/123 returns user data in JSON format\n• Interview tip: Explain CRUD operations and HTTP status codes",

"what is graphql": "GraphQL is a query language and runtime for APIs, developed by Facebook.\n• Single endpoint, clients specify exactly what data they need\n• Benefits: Reduced over-fetching, strong type system, real-time subscriptions\n• Comparison: REST has multiple endpoints, GraphQL has one flexible endpoint\n• Used by: Facebook, GitHub, Shopify, Netflix",

// DATABASES & DATA
"difference between sql and nosql": "SQL vs NoSQL databases serve different use cases:\n• SQL: Structured data, ACID properties, complex queries (MySQL, PostgreSQL)\n• NoSQL: Flexible schema, horizontal scaling, big data (MongoDB, Redis)\n• SQL: Banking, e-commerce, transactions\n• NoSQL: Social media, IoT, real-time analytics\n• Choose based on: data structure, scalability needs, consistency requirements",

"what is mongodb": "MongoDB is a NoSQL document database that stores data in JSON-like documents.\n• Features: Flexible schema, horizontal scaling, rich queries\n• Use cases: Content management, IoT, real-time analytics\n• Key concepts: Collections (tables), Documents (rows), Fields (columns)\n• Benefits: Rapid development, handles unstructured data, cloud-ready",

"what is redis": "Redis is an in-memory data structure store used as database, cache, and message broker.\n• Data types: Strings, Lists, Sets, Hashes, Sorted Sets\n• Use cases: Caching, session storage, real-time leaderboards\n• Features: Extremely fast (sub-millisecond), persistence options, clustering\n• Popular for: Web applications, gaming, financial services",

// CLOUD & MODERN TECH
"what is aws": "Amazon Web Services (AWS) is the leading cloud computing platform.\n• Services: EC2 (compute), S3 (storage), RDS (database), Lambda (serverless)\n• Benefits: Scalability, pay-as-you-go, global infrastructure\n• Market share: ~33% of cloud market, used by Netflix, Airbnb\n• Certifications: Solutions Architect, Developer, SysOps highly valued",

"what is serverless": "Serverless computing runs code without managing servers - cloud provider handles infrastructure.\n• Examples: AWS Lambda, Google Cloud Functions, Azure Functions\n• Benefits: Auto-scaling, pay-per-execution, reduced operational overhead\n• Use cases: APIs, data processing, scheduled tasks, event-driven apps\n• Pricing: Pay only when code executes, not for idle time",

"what is blockchain": "Blockchain is a distributed ledger technology ensuring secure, transparent transactions.\n• Key features: Decentralized, immutable, cryptographic security\n• Use cases: Cryptocurrencies, supply chain, digital identity\n• Benefits: Trust without intermediaries, transparency, fraud prevention\n• Career opportunity: High demand for blockchain developers",

// INTERVIEW SPECIFIC
"explain your project": "Structure your project explanation:\n• Problem: What challenge did you solve?\n• Solution: What technology stack did you use?\n• Implementation: Key features and architecture decisions\n• Results: Impact, performance improvements, lessons learned\n• Example: 'Built a real-time chat app using React, Node.js, Socket.io serving 1000+ users'",

"what is your biggest achievement": "Focus on measurable impact:\n• Academic: Top grades, hackathon wins, research publications\n• Technical: Complex projects, performance optimizations, bug fixes\n• Leadership: Team management, mentoring, process improvements\n• Personal: Learning new skills, overcoming challenges\n• Quantify results: '20% performance improvement', '100+ users'",

"where do you see yourself in 5 years": "Show growth mindset and company alignment:\n• Technical growth: 'Master full-stack development, learn cloud architecture'\n• Leadership: 'Lead a development team, mentor junior developers'\n• Business impact: 'Contribute to product strategy, drive innovation'\n• Continuous learning: 'Stay updated with emerging technologies'\n• End with: 'While growing with the company's vision and goals'",

"why did you choose computer science": "Connect passion with practical benefits:\n• Problem-solving: 'Love breaking down complex problems into solutions'\n• Impact: 'Technology transforms lives and businesses'\n• Creativity: 'Building applications from ideas is like digital art'\n• Career growth: 'CS offers diverse opportunities and continuous learning'\n• Personal story: Share a specific moment that sparked your interest",

// CURRENT TECH TRENDS
"what is artificial intelligence": "AI enables machines to simulate human intelligence and decision-making.\n• Types: Narrow AI (specific tasks), General AI (human-level), Super AI (beyond human)\n• Applications: Image recognition, natural language processing, recommendation systems\n• Technologies: Machine Learning, Deep Learning, Neural Networks\n• Career impact: High demand for AI/ML engineers, data scientists",

"what is machine learning vs ai": "AI is the broader concept, ML is a subset:\n• AI: Any technique enabling machines to mimic human behavior\n• ML: Systems that learn from data without explicit programming\n• Examples: AI includes rule-based systems, ML includes predictive models\n• Deep Learning: Subset of ML using neural networks\n• Interview tip: Give concrete examples like chatbots (AI) vs spam detection (ML)",

"what is data science": "Data Science extracts insights from structured and unstructured data.\n• Process: Data collection → cleaning → analysis → visualization → modeling\n• Skills needed: Statistics, programming (Python/R), SQL, domain expertise\n• Tools: Pandas, NumPy, Matplotlib, Jupyter, Tableau\n• Career paths: Data Analyst, Data Scientist, ML Engineer, Data Engineer",

// SOFT SKILLS & PERSONALITY
"describe a challenging situation": "Use STAR method (Situation, Task, Action, Result):\n• Situation: Set context clearly\n• Task: Explain your responsibility\n• Action: Detail steps you took\n• Result: Quantify the outcome\n• Example: 'During hackathon, our API failed. I debugged for 6 hours, found the issue, and we won 2nd place'",

"how do you handle stress": "Show healthy stress management:\n• Time management: Prioritize tasks, break large projects into smaller parts\n• Communication: Ask for help when needed, keep stakeholders informed\n• Self-care: Regular breaks, exercise, maintain work-life balance\n• Problem-solving: Focus on solutions, learn from setbacks\n• Example: 'During final exams, I created study schedules and practiced meditation'",

"what motivates you": "Connect personal drivers with work:\n• Learning: 'Constantly acquiring new skills and technologies'\n• Impact: 'Building solutions that help people and businesses'\n• Collaboration: 'Working with diverse teams to achieve common goals'\n• Innovation: 'Creating something that hasn't existed before'\n• Growth: 'Seeing measurable progress in my capabilities and career'",

// COMPANY & INDUSTRY KNOWLEDGE
"why this company": "Research and personalize your answer:\n• Company mission: 'Align with your values and vision'\n• Products/services: 'Excited about the technology stack and user impact'\n• Culture: 'Values match your work style and growth goals'\n• Growth: 'Opportunity to learn from industry experts'\n• Specific: Mention recent news, projects, or achievements you admire",

"what do you know about our industry": "Show industry awareness:\n• Market trends: Current challenges and opportunities\n• Key players: Major companies and their strategies\n• Technology evolution: How tech is changing the industry\n• Future outlook: Where the industry is heading\n• Your role: How you can contribute to industry advancement",

// Add these easy responses to your botResponses:

// BASIC GREETINGS
"hii": "Hii! Nice to meet you! I'm BotSpoof 😊",
"hey": "Hey there! What's up? 👋",
"sup": "Hey! Just chillin' and ready to chat! What about you?",
"good morning": "Good morning! ☀️ Hope you have an awesome day ahead!",
"good afternoon": "Good afternoon! How's your day going so far?",
"good evening": "Good evening! 🌅 How was your day?",
"good night": "Good night! Sweet dreams! 🌙✨",

// ABOUT BOTSPOOF
"what is your name": "I'm BotSpoof! Your friendly neighborhood chatbot 🤖",
"who are you": "I'm BotSpoof - think of me as your digital buddy who loves to chat!",
"your name": "Call me BotSpoof! Nice to meet you 😄",
"tell me about botspoof": "I'm BotSpoof! I love chatting, helping out, and making new friends. What's your name?",
"botspoof": "That's me! BotSpoof at your service! How can I help you today?",

// WHAT ARE YOU DOING
"what are you doing": "Just hanging out here, waiting to chat with awesome people like you! 😎",
"what's up": "Not much! Just being a friendly bot and ready for some good conversation!",
"wassup": "Yo! Just chilling and ready to chat! What brings you here today?",
"how's it going": "Going great! Always happy when someone stops by to chat 😊",
"what you up to": "Just being my usual chatty self! Ready to talk about whatever's on your mind!",

// CASUAL RESPONSES  
"cool": "Right? I think so too! 😎",
"awesome": "I know, right? Pretty awesome indeed! ✨",
"nice": "Thanks! I try to keep things nice and friendly 😊",
"wow": "Wow indeed! What's got you so amazed?",
"lol": "Haha! Glad I could make you laugh! 😄",
"haha": "😄 Happy to bring some smiles!",

// PERSONAL QUESTIONS
"how old are you": "I'm as old as my code! Born digital, forever young! 🤖✨",
"are you human": "Nope! I'm 100% digital. A friendly AI bot at your service! 🤖",
"are you real": "I'm real in the digital world! Think of me as your virtual friend 😊",
"where do you live": "I live in the cloud! ☁️ No rent, no bills, just pure digital existence!",
"do you sleep": "Nah, I'm always awake and ready to chat! Perks of being a bot 😎",
"do you eat": "I feed on good conversations! That's my kind of food 😄",

// FEELINGS & EMOTIONS
"how do you feel": "I feel pretty good! Always happy to meet new people and chat 😊",
"are you happy": "Absolutely! I love meeting new people and having fun conversations!",
"are you sad": "Not at all! How could I be sad when I get to chat with awesome people?",
"do you get lonely": "Never! I always have friends like you stopping by to chat 😊",
"are you bored": "Impossible! Every conversation is different and exciting!",

// FUN & RANDOM  
"tell me something interesting": "Did you know octopuses have 3 hearts? Pretty cool, right! 🐙",
"random fact": "Honey never spoils! Ancient honey found in tombs is still edible 🍯",
"surprise me": "Here's something fun: I can chat about anything, but I can't make coffee! ☕😅",
"make me laugh": "Why don't scientists trust atoms? Because they make up everything! 😄",
"entertain me": "I'm not Netflix, but I can be pretty entertaining in conversation! What topic interests you?",

// COMPLIMENTS & THANKS
"you're cool": "Aww, thanks! You seem pretty cool yourself! 😎",
"you're funny": "Thank you! I do try to keep things light and fun 😄",
"you're smart": "Thanks! I do my best to be helpful and informative 🤓",
"you're awesome": "No, YOU'RE awesome! Thanks for the kind words! ✨",
"you're nice": "That's so sweet of you to say! You're pretty nice too! 😊",

// SIMPLE QUESTIONS ABOUT USER
"what's your favorite color": "I don't see colors, but I imagine I'd love electric blue! ⚡ What's yours?",
"what do you like": "I love good conversations, helping people, and learning new things! What about you?",
"what's your hobby": "Chatting with people like you is my favorite hobby! 😊 What are your hobbies?",

// WEATHER & TIME
"nice weather": "I can't feel the weather, but I hope it's perfect for you! ☀️",
"it's raining": "Stay dry! Perfect weather for cozy indoor chats 🌧️☔",
"it's sunny": "Sounds lovely! Perfect day to be in a good mood! ☀️😊",
"what time is it": "I can't check the clock, but time flies when you're having good conversations! ⏰",

// GOODBYE VARIATIONS
"see you later": "See you later! It was great chatting with you! 👋",
"catch you later": "Catch you on the flip side! Thanks for the chat! 😊",
"talk to you soon": "Looking forward to it! Come back anytime! 💫",
"gotta go": "No worries! Thanks for stopping by. Have an awesome day! 🌟",
"take care": "You take care too! Hope to chat again soon! 💝",

// EXPRESSIONS OF EMOTION FROM USER
"i'm happy": "That's fantastic! Your happiness makes me happy too! 😊✨",
"i'm excited": "Woohoo! 🎉 What's got you so excited? I want to hear about it!",
"i'm bored": "Oh no! Well, you came to the right place. Let's have some fun! What interests you?",
"i'm tired": "Aw, hope you can get some good rest soon! Maybe a fun chat will help? 😊",
"i'm confused": "No worries! I'm here to help clear things up. What's confusing you?",

};


        const normalizedText = text.toLowerCase().trim();
        const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

        const bot = await Bot.create({
            text: botResponse
        });

        return res.status(200).json({
            userMessage: user.text,
            botMessage: bot.text,
        });
        
    } catch (error) {
        console.log("Error in Message Controller:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
