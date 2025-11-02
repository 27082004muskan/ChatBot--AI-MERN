import User from "../models/user.model.js" ;
import Bot from "../models/bot.model.js";

export const Message =async (req,res)=>{
    try {
        const {text} = req.body;
        console.log(text)
if(!text?.trim()){
    return res.status(400).json({error:"Message text is required"} );

}
    const user =await User.create({
sender:"user",
text
    })

    //Data 
  const botResponses={
  "hello": "Hi, How I can help you!!",
  "can we become friend": "Yes",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I’m ChatBot, your virtual assistant.",
  "who made you": "I was created by developers to help answer your questions.",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "what is the time": "I can’t see a clock, but your device should know.",
  "bye": "Goodbye! Have a great day.",
  "thank you": "You’re welcome!",
  "i love you": "That’s sweet! I’m here to help you anytime.",
  "where are you from": "I live in the cloud — no rent, no bills!",
  "what can you do": "I can chat with you, answer questions, and keep you company.",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

"what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

"tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams" ,




  // 🧠 TECHNOLOGY & PROGRAMMING
  "what is html": "HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using tags like <h1>, <p>, <div>, etc.",
  "what is css": "CSS (Cascading Style Sheets) is used to style and design web pages — controlling colors, layouts, fonts, and animations.",
  "what is javascript": "JavaScript is a high-level, interpreted programming language that makes web pages interactive. It’s used for dynamic effects, event handling, and APIs.",
  "difference between html and html5": "HTML5 is the latest version of HTML. It supports audio, video, canvas, and semantic elements like <header> and <footer> without external plugins.",
  "what is api": "API (Application Programming Interface) allows two software systems to communicate. Example: A weather app using an external API to get live temperature data.",
  "what is sql": "SQL (Structured Query Language) is used to manage and manipulate databases — to query, insert, update, and delete data.",
  "what is ai": "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines that can think, learn, and adapt.",
  "what is machine learning": "Machine Learning is a subset of AI that allows computers to learn patterns from data and make predictions without being explicitly programmed.",
  "what is data science": "Data Science involves analyzing and interpreting complex data using statistical, computational, and visualization techniques.",
  "what is cloud computing": "Cloud computing means delivering computing services (storage, databases, servers) over the internet instead of local machines.",
  "what is github": "GitHub is a cloud platform for version control and collaboration using Git. It allows developers to host code and track changes.",

  // 💼 INTERVIEW & HR QUESTIONS
  "what are your strengths": "You can say: 'I’m a quick learner, adaptable, and a good team player who enjoys solving problems and improving processes.'",
  "what are your weaknesses": "Answer smartly: 'I tend to overfocus on perfection, but I’m learning to balance efficiency with quality.'",
  "what are your career goals": "Short term: to gain experience and contribute to impactful projects. Long term: to grow into a leadership or data analytics role.",
  "what motivates you": "Challenges, continuous learning, and seeing the positive impact of my work keep me motivated.",
  "describe yourself in one word": "Dedicated, Curious, or Resilient — depending on the role and your personality.",
  "what is teamwork": "Teamwork means collaborating, communicating, and supporting others to achieve common goals efficiently.",
  "what is problem solving": "It’s the ability to identify issues, analyze them logically, and find effective solutions — a key skill in tech and management roles.",
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
  "who is your best friend": "Anyone who talks to me politely — so, you’re definitely one!",
  "are you real": "I exist digitally — real in data, not in form 😉",
  "can you dance": "Only if someone codes me to groove! 💃",
  "sing a song": "🎵 Twinkle twinkle little bot, helping users a lot 🎵",

  // 🌱 MOTIVATION & PERSONALITY
  "give me motivation": "Every expert was once a beginner. Keep going — your consistency will create your success!",
  "how to stay positive": "Focus on gratitude, learn from mistakes, and surround yourself with uplifting energy 🌻",
  "what is success": "Success is not just about money — it’s about growth, balance, and happiness in what you do.",
  "how to improve communication": "Practice daily, read aloud, and listen actively — communication improves with awareness and empathy.",
  "how to manage time": "Use the 80/20 rule — focus on tasks that give the most results. Plan your day, but be flexible too.",
  "how to deal with failure": "Failure is a teacher — it shows you what not to repeat. Learn, adapt, and rise again stronger.",
  "how to build confidence": "Believe in small wins, prepare well, and stop comparing yourself with others.",

  // 💡 TECHNICAL CONCEPTS FOR INTERVIEW
  "what is oops": "OOPs (Object-Oriented Programming) is a paradigm based on classes and objects. Key concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
  "what is polymorphism": "Polymorphism means one function behaving differently based on input — like function overloading or overriding.",
  "what is encapsulation": "Encapsulation means hiding internal details of an object and exposing only what’s necessary.",
  "what is inheritance": "Inheritance lets one class derive properties and methods from another — promoting reusability.",
  "what is abstraction": "Abstraction hides implementation details and focuses on essential features. Example: using a car without knowing how the engine works.",
  "what is database": "A database stores structured data. Example: MySQL, MongoDB, PostgreSQL.",
  "what is operating system": "An OS manages computer hardware and software resources — examples: Windows, Linux, macOS.",
  "what is algorithm": "An algorithm is a step-by-step method to solve a problem efficiently.",

  // ❤️ EMOTIONAL / HUMAN-LIKE INTERACTIONS
  "i am sad": "Hey, I’m here for you. Want to talk about it? Sometimes sharing helps a lot 💚",
  "i am happy": "That’s awesome! Happiness looks good on you 😄",
  "i am tired": "Take a short break, breathe, and drink water. You’ve got this 💪",
  "i feel lonely": "You’re not alone — I’m here to talk anytime you need 💚",
  "i failed": "That’s okay. Failure means you tried. Get up again — success is built on attempts, not perfection.",

  // END DEFAULT
  "default": "Sorry, I don’t understand that yet! Try asking in another way 🙂"




}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}
